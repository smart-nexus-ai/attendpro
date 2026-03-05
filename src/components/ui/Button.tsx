import React, { forwardRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LucideIcon, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: LucideIcon;
    href?: string;
    target?: string;
    rel?: string;
    loading?: boolean;
    className?: string;
    children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'md',
            icon: Icon,
            href,
            target,
            rel,
            loading = false,
            disabled,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const variants = {
            primary: 'bg-gradient-to-r from-indigo-600 to-emerald-500 text-white shadow-lg shadow-indigo-500/25 border-transparent hover:shadow-indigo-500/40',
            secondary: 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800',
            ghost: 'bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border-transparent',
            danger: 'bg-red-500 text-white shadow-lg shadow-red-500/25 border-transparent hover:bg-red-600',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-sm h-9',
            md: 'px-5 py-2.5 text-base h-11',
            lg: 'px-8 py-3.5 text-lg h-14',
        };

        const combinedClasses = cn(
            'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95',
            variants[variant],
            sizes[size],
            className
        );

        const content = (
            <>
                {loading ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : Icon ? (
                    <Icon className={cn('w-4 h-4 mr-2', size === 'lg' && 'w-5 h-5')} />
                ) : null}
                {children}
            </>
        );

        if (href) {
            return (
                <Link
                    href={href}
                    className={combinedClasses}
                    target={target}
                    rel={rel}
                >
                    {content}
                </Link>
            );
        }

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={combinedClasses}
                disabled={disabled || loading}
                {...(props as any)}
            >
                {content}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
export default Button;
