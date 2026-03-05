import React from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import GradientText from './GradientText';

export type SectionAlign = 'left' | 'center' | 'right';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    badge?: string;
    align?: SectionAlign;
    gradientTitle?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
    title,
    subtitle,
    badge,
    align = 'center',
    gradientTitle = true,
    className,
    ...props
}) => {
    const alignmentClasses = {
        left: 'text-left items-start',
        center: 'text-center items-center',
        right: 'text-right items-end',
    };

    const containerRef = React.useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    return (
        <div
            ref={containerRef}
            className={cn('flex flex-col gap-4 mb-12', alignmentClasses[align], className)}
            {...props}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4"
            >
                {badge && (
                    <span className="text-sm font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
                        {badge}
                    </span>
                )}

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                    {gradientTitle ? (
                        <GradientText>{title}</GradientText>
                    ) : (
                        title
                    )}
                </h2>

                {subtitle && (
                    <p className={cn(
                        "text-lg text-slate-600 dark:text-slate-400 max-w-2xl",
                        align === 'center' && 'mx-auto'
                    )}>
                        {subtitle}
                    </p>
                )}
            </motion.div>
        </div>
    );
};

SectionHeading.displayName = 'SectionHeading';

export { SectionHeading };
export default SectionHeading;
