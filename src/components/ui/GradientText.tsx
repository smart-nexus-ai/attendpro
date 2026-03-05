import React from 'react';
import { cn } from '@/lib/utils';

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    from?: string;
    to?: string;
    children: React.ReactNode;
}

const GradientText: React.FC<GradientTextProps> = ({
    from = 'from-indigo-600',
    to = 'to-emerald-500',
    children,
    className,
    ...props
}) => {
    return (
        <span
            className={cn(
                'bg-clip-text text-transparent bg-gradient-to-r',
                from,
                to,
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
};

export { GradientText };
export default GradientText;
