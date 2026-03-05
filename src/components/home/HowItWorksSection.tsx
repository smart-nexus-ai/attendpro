'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, UserPlus, CalendarPlus, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const steps = [
    {
        number: "01",
        icon: Download,
        title: "Download & Install",
        description: "Get AttendPro from GitHub releases or Play Store to get started."
    },
    {
        number: "02",
        icon: UserPlus,
        title: "Create Account",
        description: "Sign up with email or Google. Complete your profile in seconds."
    },
    {
        number: "03",
        icon: CalendarPlus,
        title: "Create Session",
        description: "Add your class details, import students, and you're ready to go."
    },
    {
        number: "04",
        icon: CheckCircle2,
        title: "Mark Attendance",
        description: "Tap to mark Present/Absent. Reports generate automatically."
    }
];

const HowItWorksSection: React.FC = () => {
    return (
        <section id="how-it-works" className="py-32 relative overflow-hidden bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="Getting Started"
                    title="Get Started in Minutes"
                    subtitle="Simple 4-step flow to digitize your attendance process and save hours of manual work."
                />

                <div className="relative mt-24">
                    {/* Desktop Horizontal Connecting Line */}
                    <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="relative flex flex-col items-center text-center group"
                                >
                                    {/* Vertical Connecting Line (Mobile) */}
                                    {index !== steps.length - 1 && (
                                        <div className="lg:hidden absolute top-24 bottom-[-48px] left-1/2 w-0.5 bg-slate-200 dark:bg-slate-800 -z-10" />
                                    )}

                                    {/* Step Number Badge */}
                                    <div className="relative mb-8">
                                        <div className="w-24 h-24 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center font-black text-3xl text-slate-200 dark:text-slate-800 shadow-xl group-hover:border-blue-500 group-hover:text-blue-500 transition-all duration-500">
                                            {step.number}
                                        </div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-blue-600/5 flex items-center justify-center text-blue-600 group-hover:scale-125 transition-transform duration-500">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-[240px] mx-auto text-sm">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Desktop Arrow Indicator */}
                                    {index !== steps.length - 1 && (
                                        <div className="hidden lg:flex absolute top-10 -right-4 text-blue-500/30 group-hover:text-blue-500 group-hover:translate-x-2 transition-all duration-500">
                                            <ArrowRight className="w-6 h-6" />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
