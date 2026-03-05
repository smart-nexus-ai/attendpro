import React, { useEffect, useRef } from 'react';
import { useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface AnimatedCounterProps extends React.HTMLAttributes<HTMLSpanElement> {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    end,
    duration = 2000,
    prefix = '',
    suffix = '',
    className,
    ...props
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, end, { duration: duration / 1000, ease: 'easeOut' });
            return controls.stop;
        }
    }, [isInView, count, end, duration]);

    useEffect(() => {
        return rounded.on('change', (v) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${v}${suffix}`;
            }
        });
    }, [rounded, prefix, suffix]);

    return (
        <span
            ref={ref}
            className={cn('font-bold tabular-nums', className)}
            {...props}
        >
            {prefix}0{suffix}
        </span>
    );
};

export { AnimatedCounter };
export default AnimatedCounter;
