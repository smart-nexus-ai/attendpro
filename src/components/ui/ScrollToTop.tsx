'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';

const ScrollToTop: React.FC = () => {
    const scrollPosition = useScrollPosition();
    const isVisible = scrollPosition > 400;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className={cn(
                        'fixed bottom-6 right-6 z-50 p-3 rounded-full',
                        'bg-slate-900/10 dark:bg-white/10 backdrop-blur-lg',
                        'border border-slate-200 dark:border-white/20',
                        'text-slate-900 dark:text-white',
                        'shadow-xl shadow-slate-900/5',
                        'hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-colors duration-300'
                    )}
                    aria-label="Scroll to top"
                >
                    <ChevronUp className="w-6 h-6" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export { ScrollToTop };
export default ScrollToTop;
