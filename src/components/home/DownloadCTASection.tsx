'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const DownloadCTASection: React.FC = () => {
    return (
        <section id="download" className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 -z-20" />

            {/* Decorative Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-white/10 blur-[100px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-emerald-300/20 blur-[80px] rounded-full"
                />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
                        Ready to Digitize Your <br className="hidden md:block" /> Attendance?
                    </h2>
                    <p className="text-xl md:text-2xl text-emerald-50/80 font-medium mb-12 max-w-2xl mx-auto">
                        Download AttendPro now and say goodbye to paper registers. Join hundreds of educators already using our platform.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            variant="secondary"
                            size="lg"
                            href="/download"
                            icon={Download}
                            className="w-full sm:w-auto bg-white text-teal-700 hover:bg-emerald-50 border-none px-10"
                        >
                            Download for Teachers
                        </Button>
                        <Button
                            variant="primary"
                            size="lg"
                            href="/download"
                            icon={Download}
                            className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 px-10"
                        >
                            Download for Students
                        </Button>
                    </div>

                    <p className="mt-12 text-sm font-bold uppercase tracking-widest text-emerald-200/60">
                        Works on Android 8.0+ (Oreo) and above
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default DownloadCTASection;
