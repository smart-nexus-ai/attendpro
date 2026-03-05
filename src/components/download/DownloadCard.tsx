'use client';

import React from 'react';
import { Download, CheckCircle2, ShoppingBag } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface DownloadCardProps {
    title: string;
    subtitle: string;
    description: string;
    apkUrl: string;
    playStoreUrl: string;
    playStoreAvailable: boolean;
    icon: React.ReactNode;
    features: string[];
}

const DownloadCard: React.FC<DownloadCardProps> = ({
    title,
    subtitle,
    description,
    apkUrl,
    playStoreUrl,
    playStoreAvailable,
    icon,
    features,
}) => {
    return (
        <Card hover className="h-full flex flex-col p-8 border-2 border-slate-100 dark:border-slate-800">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-600/5 dark:bg-indigo-400/10 flex items-center justify-center text-4xl shadow-inner">
                        {icon}
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tighter">
                            {title}
                        </h3>
                        <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
                {description}
            </p>

            {/* Features Checklist */}
            <div className="space-y-4 mb-10 flex-grow">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3 group/item">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0 group-hover/item:scale-125 transition-transform" />
                        <span className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-tight">
                            {feature}
                        </span>
                    </div>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex flex-col space-y-3">
                    <Button
                        variant="primary"
                        size="lg"
                        href={apkUrl}
                        icon={Download}
                        className="w-full shadow-lg shadow-indigo-500/10"
                    >
                        Download APK
                    </Button>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 text-center">
                        v1.0.0 • 12MB • Android 8.0+
                    </p>
                </div>

                <div className="relative group/ps">
                    <Button
                        variant="secondary"
                        size="lg"
                        href={playStoreAvailable ? playStoreUrl : undefined}
                        disabled={!playStoreAvailable}
                        icon={ShoppingBag}
                        className="w-full opacity-60 grayscale border-dashed"
                    >
                        Get on Play Store
                    </Button>
                    {!playStoreAvailable && (
                        <div className="absolute top-[-12px] right-2">
                            <Badge variant="coming-soon" className="bg-white dark:bg-slate-950 text-[10px] shadow-xl">
                                Coming Soon
                            </Badge>
                        </div>
                    )}
                </div>
            </div>

            <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-center text-slate-400 dark:text-slate-600">
                Last updated: June 2025
            </p>
        </Card>
    );
};

export default DownloadCard;
