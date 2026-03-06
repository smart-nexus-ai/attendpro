import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Scale } from 'lucide-react';

export const metadata = {
    title: 'Terms of Service | AttendPro',
    description: 'Terms of Service and Usage Guidelines for AttendPro.',
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center space-x-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-6 group bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Home</span>
                    </Link>
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                            <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                            Terms of Service
                        </h1>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-slate dark:prose-invert prose-lg max-w-none bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
                    <section className="mb-10 text-slate-700 dark:text-slate-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">1. Acceptance of Terms</h2>
                        <p>
                            By downloading, installing, accessing, or using the AttendPro application and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.
                        </p>
                    </section>

                    <section className="mb-10 text-slate-700 dark:text-slate-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">2. Description of Service</h2>
                        <p className="mb-4">
                            AttendPro is a free attendance management application currently available on Android, designed to assist educators in tracking attendance efficiently.
                        </p>
                        <p className="mb-4">Core features include:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Managing academic sessions and batches.</li>
                            <li>Managing student directories.</li>
                            <li>Marking, tracking, and reviewing attendance dynamically.</li>
                            <li>Generating detailed attendance reports and exporting them to PDF.</li>
                            <li>Generating QR codes for self-served attendance.</li>
                        </ul>
                    </section>

                    <section className="mb-10 text-slate-700 dark:text-slate-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">3. User Accounts</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>You must provide accurate, current, and complete information when registering an account.</li>
                            <li>You are solely responsible for maintaining the security of your account, login credentials, and all activities that occur under your account.</li>
                            <li>We standardly permit only one active account per associated email address.</li>
                        </ul>
                    </section>

                    <section className="mb-10 text-slate-700 dark:text-slate-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">4. Acceptable Use</h2>
                        <p className="mb-4">When using AttendPro, you agree that you will strictly adhere to the following:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Legitimate Use:</strong> You will use the system solely for its intended purpose—administering educational or professional attendance management.</li>
                            <li><strong>No Misuse:</strong> You must not misuse, hack, tamper, bypass security protocols, or reverse engineer the application or its backend infrastructure.</li>
                            <li><strong>Content Integrity:</strong> You must not upload, submit, or transmit any harmful, illegal, or malicious software and content.</li>
                        </ul>
                    </section>

                    <section className="mb-10 text-slate-700 dark:text-slate-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">5. Intellectual Property</h2>
                        <p>
                            The AttendPro application and all its original content, features, functionalities, UI/UX designs, and branding are owned by <strong>Firdous Rahaman</strong> and are protected by international copyright, trademark, trade secret, and other intellectual property laws. You may not copy, modify, distribute, or reverse engineer any parts of the app for commercial or unapproved secondary use.
                        </p>
                    </section>

                    <section className="mb-10 text-slate-700 dark:text-slate-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">6. Data & Content</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Your Ownership:</strong> You retain complete ownership of all the raw attendance data you generate or submit using our service.</li>
                            <li><strong>License to Process:</strong> By using the app, you grant AttendPro the necessary technical licenses to store, host, and process your data to deliver the promised app functionalities (such as displaying reports across devices).</li>
                            <li><strong>Data Retention:</strong> For platform optimization, we reserve the right to delete entirely inactive accounts (and associated data) following 12 months of zero login activity.</li>
                        </ul>
                    </section>

                    <section className="mb-10 text-slate-700 dark:text-slate-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">7. Disclaimer of Warranties</h2>
                        <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                            <p className="mb-2 italic text-slate-800 dark:text-slate-200 font-medium">
                                AttendPro is provided strictly &quot;as is&quot; and &quot;as available&quot; without any form of warranty, express or implied.
                            </p>
                            <p className="text-sm">
                                While we strive to maintain robust synchronization and system safety, we do not guarantee that the service will be entirely uninterrupted, error-free, or fully impenetrable. We hold no liability for accidental data loss resulting from network issues or device faults. We strongly recommend regularly exporting and backing up important data manually (via the PDF Export tools).
                            </p>
                        </div>
                    </section>

                    <section className="mb-10 text-slate-700 dark:text-slate-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">8. Termination</h2>
                        <p>
                            We reserve the unreserved right to indefinitely suspend or terminate accounts that visibly and consistently violate these Terms of Service or pose technical risks to the broader ecosystem, without prior notice or liability.
                        </p>
                    </section>

                    <section className="mb-10 text-slate-700 dark:text-slate-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">9. Changes to Terms</h2>
                        <p>
                            We may periodically replace, modify, or update these terms at our discretional convenience. Your continued use of the app after such updates constitutes explicit acceptance of the new terms.
                        </p>
                    </section>

                    <section className="mb-10 text-slate-700 dark:text-slate-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">10. Contact Information</h2>
                        <p className="mb-4">
                            Should you require assistance with these terms, or have any specific concerns about AttendPro&apos;s services, you may reach out to:
                        </p>
                        <ul className="list-none space-y-3">
                            <li className="flex items-center space-x-3">
                                <span className="font-semibold text-slate-900 dark:text-white w-20">Email:</span>
                                <a href="mailto:smartnexus.co@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                                    smartnexus.co@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="font-semibold text-slate-900 dark:text-white w-20">Website:</span>
                                <a href="https://firdous-rahaman.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                                    https://firdous-rahaman.vercel.app
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    );
}
