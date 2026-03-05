import React, { forwardRef } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export type BadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'coming-soon';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    icon?: LucideIcon;
    pulse?: boolean;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    ({ variant = 'neutral', icon: Icon, pulse = false, className, children, ...props }, ref) => {
        const variants = {
            success: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
            warning: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
            error: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
            info: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400',
            neutral: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-400',
            'coming-soon': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border border-purple-200 dark:border-purple-800',
        };

        const combinedClasses = cn(
            'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase',
            variants[variant],
            (pulse || variant === 'coming-soon') && 'animate-pulse',
            className
        );

        return (
            <span ref={ref} className={combinedClasses} {...props}>
                {Icon && <Icon className="w-3 h-3 mr-1" />}
                {children}
            </span>
        );
    }
);

Badge.displayName = 'Badge';

export { Badge };
export default Badge;
