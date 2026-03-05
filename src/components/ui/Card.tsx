import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLMotionProps<'div'> {
    hover?: boolean;
    gradient?: boolean;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ hover = false, gradient = false, children, className, onClick, ...props }, ref) => {
        const MotionDiv = motion.div;

        // If gradient is true, we have a nested structure for the border, so the padding in outer div should be 0 if gradient is used.
        const outerClasses = cn(
            'rounded-3xl shadow-md bg-white dark:bg-slate-900 overflow-hidden border border-slate-100 dark:border-slate-800',
            hover && 'hover:shadow-2xl transition-all duration-300 dark:hover:shadow-indigo-500/10',
            !gradient && 'p-6',
            gradient && 'relative group p-[1px]',
            className
        );

        const innerContent = (
            <>
                {gradient && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-emerald-500 opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
                )}
                <div className={cn(
                    'relative h-full w-full bg-white dark:bg-slate-900 rounded-[calc(1.5rem-1px)]',
                    gradient && 'p-6'
                )}>
                    {children}
                </div>
            </>
        );

        return (
            <MotionDiv
                ref={ref}
                whileHover={hover ? { y: -8, scale: 1.01 } : undefined}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={outerClasses}
                onClick={onClick}
                {...props}
            >
                {gradient ? innerContent : children}
            </MotionDiv>
        );
    }
);

Card.displayName = 'Card';

export { Card };
export default Card;
