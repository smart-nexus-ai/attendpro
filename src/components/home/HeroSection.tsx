'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, Rocket, Smartphone } from 'lucide-react';
import { DASHBOARD_URL } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GradientText } from '@/components/ui/GradientText';

const HeroSection: React.FC = () => {
    // Variants for staggered entrance animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 -z-20 bg-white dark:bg-slate-950 transition-colors duration-500">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(circle_at_50%_100%,rgba(79,70,229,0.05),transparent_70%)]" />
            </div>

            {/* Animated Decorative Blobs */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 60, -30, 0],
                        y: [0, 40, 80, 0],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-[15%] left-[10%] w-[35rem] h-[35rem] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-[100px]"
                />
                <motion.div
                    animate={{
                        x: [0, -70, 40, 0],
                        y: [0, -50, -90, 0],
                        scale: [1, 0.9, 1.1, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    className="absolute bottom-[20%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-emerald-500/10 dark:bg-emerald-600/5 blur-[100px]"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    {/* Release Badge */}
                    <motion.div variants={itemVariants} className="mb-10">
                        <Badge variant="info" pulse icon={Rocket} className="px-5 py-2 text-xs font-bold ring-4 ring-indigo-500/10">
                            🚀 v1.0.0 — Now Available
                        </Badge>
                    </motion.div>

                    {/* Main Title */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-slate-900 dark:text-white leading-[0.9] flex flex-col items-center">
                            <span>Smart Attendance</span>
                            <GradientText className="relative inline-block pb-2">Made Simple</GradientText>
                        </h1>
                    </motion.div>

                    {/* Value Proposition */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl font-medium mb-12 leading-relaxed"
                    >
                        Digitize your classroom attendance with offline-first technology.
                        Create sessions, mark attendance, generate reports — all from your Android device.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-5 mb-16">
                        <Button
                            href="/download"
                            size="lg"
                            className="w-full sm:w-auto h-16 px-10 rounded-2xl text-lg shadow-2xl shadow-blue-600/20 active:scale-95 transition-all"
                        >
                            <Smartphone className="w-6 h-6 mr-3" />
                            Download App
                        </Button>
                        <Button
                            href="/dashboard"
                            variant="secondary"
                            size="lg"
                            className="w-full sm:w-auto h-16 px-10 rounded-2xl text-lg active:scale-95 transition-all"
                        >
                            <Rocket className="w-6 h-6 mr-3" />
                            Go to Dashboard
                        </Button>
                    </motion.div>

                    {/* Tech Proofs */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center space-x-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500"
                    >
                        <span>Available for Android 8.0+</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                        <span>Free & Open Source</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Scroll Prompt */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    className="p-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                >
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
