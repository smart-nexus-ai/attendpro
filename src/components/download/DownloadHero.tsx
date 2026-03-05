'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

const DownloadHero: React.FC = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950">
            {/* Background Decorative Gradient */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-indigo-600/5 blur-[100px] rounded-full animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-emerald-500/5 blur-[80px] rounded-full" />
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
                    <span className="text-slate-900 dark:text-white font-bold">Download</span>
                </motion.nav>

                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6"
                    >
                        Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">AttendPro</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
                    >
                        Choose your app and start managing attendance digitally. Enterprise-grade tools for both teachers and students.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default DownloadHero;
