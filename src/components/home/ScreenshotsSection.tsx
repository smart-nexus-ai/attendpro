'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';

const mockups = [
    { title: "Home Screen", description: "Session List", color: "from-blue-500 to-indigo-600", image: "/screenshots/home.webp" },
    { title: "Attendance", description: "Mark Presence", color: "from-emerald-500 to-teal-600", image: "/screenshots/attendance.webp" },
    { title: "Summary", description: "Report View", color: "from-amber-500 to-orange-600", image: "/screenshots/summary.webp" },
    { title: "Defaulter", description: "Risk Tracking", color: "from-rose-500 to-pink-600", image: "/screenshots/defaulter.webp" },
    { title: "Profile", description: "Student Detail", color: "from-purple-500 to-indigo-600", image: "/screenshots/profile.webp" },
    { title: "Settings", description: "Configuration", color: "from-slate-500 to-gray-600", image: "/screenshots/settings.webp" },
];

const ScreenshotsSection: React.FC = () => {
    return (
        <section id="screenshots" className="py-24 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="Screenshots"
                    title="Beautifully Designed Interface"
                    subtitle="Material3 design architecture providing a clean, dark-mode ready experience for educators."
                />

                <div className="mt-20 overflow-x-auto lg:overflow-visible flex lg:grid lg:grid-cols-3 gap-8 pb-8 snap-x snap-mandatory scrollbar-hide">
                    {mockups.map((mockup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="snap-center shrink-0 w-80 lg:w-full group"
                        >
                            {/* Phone Frame */}
                            <div className="relative mx-auto w-[280px] aspect-[9/19.5] rounded-[3rem] border-[12px] border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-2xl overflow-hidden ring-4 ring-indigo-500/10 group-hover:ring-indigo-500/30 group-hover:scale-[1.02] transition-all duration-500">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 dark:bg-slate-800 rounded-b-2xl z-10" />

                                {/* Actual Screenshot Image */}
                                <Image src={mockup.image} alt={mockup.title} width={280} height={560} className="object-cover rounded-[3rem]" />
                                <div className={`absolute inset-0 bg-gradient-to-br ${mockup.color} flex flex-col items-center justify-center p-8 text-center text-white opacity-0 hover:opacity-100 transition-opacity`}>
                                    <h4 className="text-xl font-black uppercase tracking-tighter mb-2">{mockup.title}</h4>
                                    <p className="text-white/70 text-sm font-medium">{mockup.description}</p>
                                </div>

                                {/* Shine Effect */}
                                <div className="absolute top-[-100%] left-[-100%] w-[300%] h-[300%] bg-white/10 rotate-[25deg] transform transition-transform group-hover:translate-x-[20%] group-hover:translate-y-[20%] pointer-events-none duration-1000" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default ScreenshotsSection;
