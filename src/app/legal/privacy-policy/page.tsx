import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata = {
    title: 'Privacy Policy | AttendPro',
    description: 'Privacy Policy for AttendPro app and services.',
};

export default function PrivacyPolicyPage() {
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
                            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                            Privacy Policy
                        </h1>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-slate dark:prose-invert prose-lg max-w-none bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
                    <section className="mb-10 text-slate-700 dark:text-slate-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">1. Introduction</h2>
                        <p className="mb-4">
                            Welcome to AttendPro. AttendPro is a comprehensive attendance management application designed for teachers and educators to streamline their workflow.
                        </p>
                        <p>
                            Built by Firdous Rahaman, AttendPro is committed to protecting your privacy and ensuring you have a positive experience on our app. This Privacy Policy explains how we collect, use, and safeguard your information.
                        </p>
                    </section>

                    <section className="mb-10 text-slate-700 dark:text-slate-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">2. Information We Collect</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Account Information:</strong> Name and email address (via Firebase Auth / Google Sign-In).</li>
                            <li><strong>Profile Data:</strong> College, department, and designation (collected during profile completion).</li>
                            <li><strong>App Data:</strong> Attendance records, sessions, and student lists (stored securely in Firebase Realtime Database and cached locally in Room DB).</li>
                        </ul>
                        <p className="mt-4 font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                            <strong>Note:</strong> We do NOT collect any payment information, nor do we collect precise location data.
                        </p>
                    </section>

                    <section className="mb-10 text-slate-700 dark:text-slate-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">3. How We Use Your Information</h2>
                        <p className="mb-4">We use the collected information for the following purposes:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>To provide core attendance management functionality.</li>
                            <li>To sync your data seamlessly across multiple devices via Firebase.</li>
                            <li>To generate attendance reports and PDF export documents.</li>
                            <li>To improve our services and troubleshoot issues.</li>
                        </ul>
                        <p className="mt-4 font-bold text-slate-900 dark:text-white">
                            We absolutely do NOT sell, rent, or share your data with third parties for marketing or advertising purposes.
                        </p>
                    </section>

                    <section className="mb-10 text-slate-700 dark:text-slate-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">4. Data Storage & Security</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Cloud Storage:</strong> Data is securely stored in Google Cloud via the Firebase Realtime Database.</li>
                            <li><strong>Local Caching:</strong> Local data is cached using a Room Database on your device to enable offline capabilities.</li>
                            <li><strong>Authentication:</strong> All authentication is securely handled by Firebase Auth.</li>
                            <li><strong>Transmission:</strong> All network requests and data transmissions occur over encrypted HTTPS connections.</li>
                        </ul>
                    </section>

                    <section className="mb-10 text-slate-700 dark:text-slate-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">5. Third-Party Services</h2>
                        <p className="mb-4">To power our application, we utilize the following trusted third-party services:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Google Firebase:</strong> Used for secure Authentication and Realtime Database functions.</li>
                            <li><strong>Google Sign-In:</strong> Used as the Credential Manager for a smooth login system.</li>
                        </ul>
                        <p className="mt-4">
                            We do not use any analytics or advertising SDKs. Your data is purely used for app functionality.
                        </p>
                    </section>

                    <section className="mb-10 text-slate-700 dark:text-slate-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">6. Data Deletion</h2>
                        <p>
                            Users have control over their accounts. You can delete your local session by logging out. For a complete account and data deletion request, please reach out to us at our contact email, and we will process the deletion promptly in accordance with best practices.
                        </p>
                    </section>

                    <section className="mb-10 text-slate-700 dark:text-slate-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">7. Children&#39;s Privacy</h2>
                        <p>
                            AttendPro is intended primarily for educators, teachers, and administrators. Our service is not directed at or built for children under the age of 13, and we do not knowingly collect personal information from children under 13.
                        </p>
                    </section>

                    <section className="mb-10 text-slate-700 dark:text-slate-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">8. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically for the latest information on our privacy practices.
                        </p>
                    </section>

                    <section className="mb-10 text-slate-700 dark:text-slate-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-5">9. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions or suggestions in regards to your privacy, or if you wish to exercise your data rights, please contact us:
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
