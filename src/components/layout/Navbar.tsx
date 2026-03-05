'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS, DASHBOARD_URL } from '@/lib/constants';
import useScrollPosition from '@/hooks/useScrollPosition';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

/**
 * Navbar Component
 * Main navigation bar with sticky behavior and scroll-aware styling.
 */
const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const scrollY = useScrollPosition();
    const pathname = usePathname();
    const isScrolled = scrollY > 20;

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                    isScrolled
                        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md py-3 shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/5'
                        : 'bg-transparent py-5'
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center justify-between">
                        {/* Logo Section */}
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-300">
                                A
                            </div>
                            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                                AttendPro
                            </span>
                        </Link>

                        {/* Desktop Navigation Section */}
                        <div className="hidden md:flex items-center space-x-10">
                            <div className="flex items-center space-x-8">
                                {NAV_LINKS.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={cn(
                                                'relative text-sm font-semibold transition-colors duration-200',
                                                isActive
                                                    ? 'text-blue-600 dark:text-blue-400'
                                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                            )}
                                        >
                                            {link.label}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="nav-underline"
                                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                                />
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>

                            <div className="flex items-center space-x-4 pl-8 border-l border-slate-200 dark:border-slate-800">
                                <ThemeToggle />
                                <Link
                                    href="/dashboard"
                                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    Go to Dashboard
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Actions Section */}
                        <div className="flex items-center space-x-4 md:hidden">
                            <ThemeToggle />
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:scale-105 transition-transform"
                                aria-label="Open menu"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    );
};

export default Navbar;
