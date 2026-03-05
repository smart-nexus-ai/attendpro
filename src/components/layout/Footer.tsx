import React from 'react';
import Link from 'next/link';
import { Github, Mail, Phone, Clock, ArrowRight } from 'lucide-react';
import {
    APP_NAME,
    TAGLINE,
    NAV_LINKS,
    SUPPORT_EMAIL,
    SUPPORT_PHONE,
    WORKING_HOURS,
    GITHUB_REPO
} from '@/lib/constants';

/**
 * Footer Component
 * Site-wide footer with branding, navigation links, and contact information.
 */
const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-2 group w-fit">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-600/20 group-hover:rotate-6 transition-transform">
                                A
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                {APP_NAME}
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400">
                            {TAGLINE}. Designed to streamline attendance tracking and reporting for modern educational environments.
                        </p>
                        <div className="pt-2">
                            <a
                                href={GITHUB_REPO}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
                            >
                                <Github className="w-5 h-5" />
                                <span className="text-sm font-medium">Star on GitHub</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
                        <ul className="space-y-4">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-flex items-center space-x-2"
                                    >
                                        <ArrowRight className="w-3 h-3" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-flex items-center space-x-2"
                                >
                                    <ArrowRight className="w-3 h-3" />
                                    <span>Privacy Policy</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Apps */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Our Apps</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/download"
                                    className="group flex flex-col space-y-1 p-3 rounded-xl border border-slate-800 hover:bg-slate-800/50 hover:border-slate-700 transition-all"
                                >
                                    <span className="text-white font-semibold flex items-center justify-between">
                                        AttendPro (Teacher)
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </span>
                                    <span className="text-xs text-slate-500">For educators & admins</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/download"
                                    className="group flex flex-col space-y-1 p-3 rounded-xl border border-slate-800 hover:bg-slate-800/50 hover:border-slate-700 transition-all"
                                >
                                    <span className="text-white font-semibold flex items-center justify-between">
                                        My Attendance (Student)
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </span>
                                    <span className="text-xs text-slate-500">For student self-tracking</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-slate-400">
                                <Mail className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                <div className="flex flex-col">
                                    <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Email</span>
                                    <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-white transition-colors">{SUPPORT_EMAIL}</a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3 text-slate-400">
                                <Phone className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                <div className="flex flex-col">
                                    <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Phone</span>
                                    <a href={`tel:${SUPPORT_PHONE}`} className="hover:text-white transition-colors">{SUPPORT_PHONE}</a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3 text-slate-400">
                                <Clock className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                <div className="flex flex-col">
                                    <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Hours</span>
                                    <span>{WORKING_HOURS}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500">
                        © 2025 {APP_NAME}. All rights reserved.
                    </p>
                    <p className="text-sm text-slate-500 flex items-center">
                        Made with <span className="text-red-500 mx-1">❤️</span> for Smart Nexus
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
