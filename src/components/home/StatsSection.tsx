'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const stats = [
    {
        end: 30,
        suffix: "+",
        label: "Days of Development"
    },
    {
        end: 6,
        label: "Room DB Entities"
    },
    {
        end: 11,
        label: "ViewModels"
    },
    {
        end: 3,
        label: "Report Types"
    }
];

const StatsSection: React.FC = () => {
    return (
        <section id="stats" className="relative py-24 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-indigo-600 dark:bg-indigo-900 -z-20" />

            {/* Decorative Patterns */}
            <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center space-y-2 group"
                        >
                            <div className="text-white text-5xl md:text-7xl font-black tracking-tighter transition-transform group-hover:scale-110 duration-500">
                                <AnimatedCounter
                                    end={stat.end}
                                    suffix={stat.suffix}
                                    className="font-black"
                                />
                            </div>
                            <div className="text-indigo-100 text-sm md:text-base font-bold uppercase tracking-[0.2em] opacity-80">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
