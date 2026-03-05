'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface PortalCardProps {
    title: string;
    icon: React.ReactNode;
    description: string;
    features: string[];
    href: string;
    color: 'indigo' | 'emerald' | 'amber' | 'purple' | 'rose';
    badge?: string;
}

const colorMap = {
    indigo: 'from-indigo-500/10 to-indigo-500/5 text-indigo-600 dark:text-indigo-400 group-hover:border-indigo-500/50',
    emerald: 'from-emerald-500/10 to-emerald-500/5 text-emerald-600 dark:text-emerald-400 group-hover:border-emerald-500/50',
    amber: 'from-amber-500/10 to-amber-500/5 text-amber-600 dark:text-amber-400 group-hover:border-amber-500/50',
    purple: 'from-purple-500/10 to-purple-500/5 text-purple-600 dark:text-purple-400 group-hover:border-purple-500/50',
    rose: 'from-rose-500/10 to-rose-500/5 text-rose-600 dark:text-rose-400 group-hover:border-rose-500/50',
};

const iconBgMap = {
    indigo: 'bg-indigo-500/10',
    emerald: 'bg-emerald-500/10',
    amber: 'bg-amber-500/10',
    purple: 'bg-purple-500/10',
    rose: 'bg-rose-500/10',
};

const PortalCard: React.FC<PortalCardProps> = ({
    title,
    icon,
    description,
    features,
    href,
    color,
    badge,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group"
        >
            <Card className={cn(
                "h-full flex flex-col p-8 border-2 border-slate-100 dark:border-slate-800 transition-all duration-300",
                colorMap[color]
            )}>
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                    <div className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-inner",
                        iconBgMap[color]
                    )}>
                        {icon}
                    </div>
                    {badge && (
                        <Badge variant={badge === 'Coming Soon' ? 'coming-soon' : 'error'} className="mt-1 shadow-sm">
                            {badge}
                        </Badge>
                    )}
                </div>

                <div className="flex-grow">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter uppercase">
                        {title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-8 leading-relaxed line-clamp-2">
                        {description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-3 mb-10">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-3 group/item">
                                <CheckCircle2 className={cn("w-4 h-4 mt-0.5 shrink-0 transition-transform", color.includes('indigo') ? 'text-indigo-500' : 'text-slate-400')} />
                                <span className="text-slate-600 dark:text-slate-400 font-bold text-xs leading-tight tracking-tight">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                    <Button
                        variant={color === 'indigo' ? 'primary' : 'secondary'}
                        size="md"
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full font-black uppercase tracking-widest text-xs h-12"
                    >
                        <span>Open Portal</span>
                        <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
                    </Button>
                </div>
            </Card>
        </motion.div>
    );
};

export default PortalCard;
