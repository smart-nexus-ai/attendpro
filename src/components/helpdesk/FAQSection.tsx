'use client';

import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

const faqs = [
    {
        question: "How do I install the APK?",
        answer: "Download the APK from our Download page. Go to Settings > Security > enable 'Install from Unknown Sources'. Open the APK file and tap Install."
    },
    {
        question: "Does AttendPro work offline?",
        answer: "Yes! AttendPro is built with offline-first architecture. You can mark attendance without internet. Data syncs automatically when you're back online via WorkManager."
    },
    {
        question: "How do I import students from Google Sheets?",
        answer: "Make your Google Sheet public. Go to your session > Students tab > Import > paste the public CSV URL. You can preview the data before importing."
    },
    {
        question: "What do the attendance values mean?",
        answer: "Present (1) = attended, Absent (0) = missed, Double (2) = counted twice (lab sessions), Excluded (-1) = not counted in percentage."
    },
    {
        question: "How is attendance percentage calculated?",
        answer: "Percentage = (presentScore / validClasses) * 100. Valid classes exclude cancelled classes and individually excluded entries."
    },
    {
        question: "Can multiple teachers mark the same session?",
        answer: "Currently no. Each session is owned by one teacher. The lock mechanism prevents simultaneous marking. Multi-teacher support is planned for a future update."
    },
    {
        question: "How do I generate PDF reports?",
        answer: "Go to your session > Reports tab > choose Summary, Defaulter, or Date-wise report > tap the PDF export button. Reports include a QR code for verification."
    },
    {
        question: "My attendance didn't sync. What should I do?",
        answer: "Check the sync status in the Attendance tab. If it shows 'Failed', try pull-to-refresh. If the issue persists, check your internet connection and try again. Failed syncs retry up to 5 times automatically."
    }
];

const FAQSection: React.FC = () => {
    return (
        <section id="faq" className="py-24 bg-white dark:bg-slate-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="Support"
                    title="Frequently Asked Questions"
                    subtitle="Quick answers to common technical queries about AttendPro's features and installation."
                    align="center"
                />

                <div className="mt-12 space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <Disclosure>
                                {({ open }) => (
                                    <div className={cn(
                                        "border rounded-3xl transition-all duration-300",
                                        open
                                            ? "bg-slate-50 dark:bg-slate-900 shadow-xl border-indigo-500/30"
                                            : "border-slate-100 dark:border-slate-800 hover:border-indigo-500/30"
                                    )}>
                                        <Disclosure.Button className="flex w-full items-center justify-between px-8 py-6 text-left">
                                            <span className="text-sm md:text-base font-bold text-slate-900 dark:text-white flex items-center">
                                                <HelpCircle className={cn("w-5 h-5 mr-4 transition-colors", open ? "text-indigo-600" : "text-slate-400")} />
                                                {faq.question}
                                            </span>
                                            <ChevronDown
                                                className={cn(
                                                    "h-5 w-5 text-slate-400 transition-transform duration-300",
                                                    open && "rotate-180 text-indigo-600"
                                                )}
                                            />
                                        </Disclosure.Button>

                                        <Transition
                                            enter="transition duration-100 ease-out"
                                            enterFrom="transform scale-95 opacity-0"
                                            enterTo="transform scale-100 opacity-100"
                                            leave="transition duration-75 ease-out"
                                            leaveFrom="transform scale-100 opacity-100"
                                            leaveTo="transform scale-95 opacity-0"
                                        >
                                            <Disclosure.Panel className="px-8 pb-8 pt-0">
                                                <div className="pl-9 text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed border-t border-slate-200 dark:border-slate-700 pt-6">
                                                    {faq.answer}
                                                </div>
                                            </Disclosure.Panel>
                                        </Transition>
                                    </div>
                                )}
                            </Disclosure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
