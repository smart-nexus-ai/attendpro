'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Home, LayoutDashboard } from 'lucide-react';

const DashboardHero: React.FC = () => {
    return (
        <section className="relative pt-32 pb-16 overflow-hidden bg-white dark:bg-slate-950">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Breadcrumb */}
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-sm font-medium text-slate-500 dark:text-slate-400 mb-8"
                >
                    <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center">
                        <Home className="w-4 h-4 mr-1" />
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                    <span className="text-slate-900 dark:text-white font-bold">Dashboard</span>
                </motion.nav>

                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50 text-xs font-bold mb-6"
                    >
                        <LayoutDashboard className="w-3.5 h-3.5" />
                        <span className="uppercase tracking-widest">Web Dashboard Access</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-6"
                    >
                        Access Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">Dashboard</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl"
                    >
                        Securely manage attendance, monitor student progress, and access detailed administrative records through our unified web portal.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default DashboardHero;
