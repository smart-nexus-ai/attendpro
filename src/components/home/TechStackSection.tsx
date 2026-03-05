'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

const techGroups = [
    {
        category: "Language & UI",
        techs: ["Kotlin", "Jetpack Compose", "Material3"]
    },
    {
        category: "Architecture",
        techs: ["MVVM", "Hilt (DI)", "Room DB"]
    },
    {
        category: "Cloud & Auth",
        techs: ["Firebase Realtime DB", "Firebase Auth", "Google Sign-In"]
    },
    {
        category: "Background",
        techs: ["WorkManager", "Coroutines", "Flow"]
    },
    {
        category: "Other",
        techs: ["Navigation Compose", "DataStore", "ZXing QR", "PdfDocument"]
    }
];

const TechBadge: React.FC<{ name: string; index: number }> = ({ name, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className={cn(
                "flex items-center space-x-2 px-5 py-3 rounded-2xl",
                "bg-white dark:bg-slate-900",
                "border border-slate-100 dark:border-slate-800 shadow-sm transition-all cursor-default group",
                "hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30"
            )}
        >
            <div className="w-2 h-2 rounded-full bg-indigo-500 opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all" />
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tighter">
                {name}
            </span>
        </motion.div>
    );
};

const TechStackSection: React.FC = () => {
    return (
        <section id="tech-stack" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
            {/* Background dynamic blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] bg-indigo-600/5 blur-[120px] -z-10 rounded-full" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="Tech Stack"
                    title="Built with Modern Technologies"
                    subtitle="Enterprise-grade tools and best practices ensuring a reliable, scalable classroom experience."
                />

                <div className="mt-20 space-y-16">
                    {techGroups.map((group, groupIdx) => (
                        <div key={groupIdx} className="flex flex-col items-center">
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-600 mb-8 px-4 text-center">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {group.techs.map((name, techIdx) => (
                                    <TechBadge
                                        key={name}
                                        name={name}
                                        index={groupIdx * 3 + techIdx}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStackSection;
