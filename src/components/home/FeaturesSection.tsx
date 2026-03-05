'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    CloudOff,
    Lock,
    BarChart3,
    FileSpreadsheet,
    Moon,
    RefreshCw,
    FileText,
    Target,
    Cloud
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';

const features = [
    {
        icon: CloudOff,
        title: "Offline-First",
        description: "Mark attendance without internet. Data syncs automatically when connected."
    },
    {
        icon: Lock,
        title: "Session Locking",
        description: "Prevent duplicate marking with distributed lock mechanism. Auto-expires in 10 minutes."
    },
    {
        icon: BarChart3,
        title: "3 Report Types",
        description: "Summary Report, Defaulter List, and Date-wise Report with PDF export."
    },
    {
        icon: FileSpreadsheet,
        title: "Google Sheet Import",
        description: "Bulk import students from Google Sheets. Preview before importing."
    },
    {
        icon: Moon,
        title: "Dark Mode",
        description: "Full dark/light/system theme support. Easy on the eyes."
    },
    {
        icon: RefreshCw,
        title: "Background Sync",
        description: "WorkManager ensures your data reaches the cloud even if the app is closed."
    },
    {
        icon: FileText,
        title: "PDF Export with QR",
        description: "Generate professional PDF reports with QR codes for verification."
    },
    {
        icon: Target,
        title: "Defaulter Tracking",
        description: "Configurable threshold (60%/75%/85%). Identify at-risk students instantly."
    },
    {
        icon: Cloud,
        title: "Firebase Backed",
        description: "Real-time cloud sync across devices with Firebase Realtime Database."
    }
];

const FeaturesSection: React.FC = () => {
    return (
        <section id="features" className="py-32 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
            {/* Background subtle art */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="Powerful Features"
                    title="Everything You Need for Attendance Management"
                    subtitle="AttendPro is built with modern technology for teachers who need absolute reliability in the classroom."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card hover className="h-full flex flex-col items-start p-8 group">
                                    <div className="w-16 h-16 rounded-2xl bg-indigo-600/5 dark:bg-indigo-400/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-inner">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
