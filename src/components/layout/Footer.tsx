import React from 'react';
import Link from 'next/link';
import { ArrowRight, Instagram, Twitter, Globe, Heart, Mail } from 'lucide-react';
import {
    APP_NAME,
} from '@/lib/constants';

/**
 * Footer Component
 * Site-wide footer with branding, navigation links, and contact information.
 */
const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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
                            Smart Attendance Management for Teachers
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/"
                                    className="text-slate-400 hover:text-blue-400 transition-colors inline-block"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#features"
                                    className="text-slate-400 hover:text-blue-400 transition-colors inline-block"
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/download"
                                    className="text-slate-400 hover:text-blue-400 transition-colors inline-block"
                                >
                                    Download
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/helpdesk"
                                    className="text-slate-400 hover:text-blue-400 transition-colors inline-block"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Legal */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Legal</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/legal/privacy-policy"
                                    className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center space-x-2 group font-medium"
                                >
                                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    <span>Privacy Policy</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/legal/terms-of-service"
                                    className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center space-x-2 group font-medium"
                                >
                                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    <span>Terms of Service</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Connect */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Connect</h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:smartnexus.co@gmail.com"
                                    className="group flex items-center space-x-3 text-slate-400 hover:text-white transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-sm">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold text-white">Email Us</span>
                                        <span className="text-xs text-slate-500 group-hover:text-blue-200 transition-colors">smartnexus.co@gmail.com</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://firdous-rahaman.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col space-y-1 p-3 rounded-xl border border-slate-800 hover:bg-slate-800/50 hover:border-slate-700 transition-all w-fit pr-10"
                                >
                                    <span className="text-white font-semibold flex items-center space-x-2">
                                        <Globe className="w-4 h-4 text-blue-400" />
                                        <span>Portfolio</span>
                                    </span>
                                    <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                                        More Apps & Projects
                                    </span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center space-x-4 pt-2">
                                    <a
                                        href="https://instagram.com/Firdous_tfg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gradient-to-tr hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white transition-all shadow-sm"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="https://x.com/Firdous_TFG"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all shadow-sm"
                                        aria-label="Twitter/X"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                                <p className="text-sm text-slate-500 mt-4 flex items-center bg-transparent pt-2">
                                    Built with <Heart className="w-4 h-4 text-red-500 mx-1.5 fill-red-500" /> by
                                    <span className="ml-1 text-slate-300 font-medium whitespace-nowrap">
                                        Firdous Rahaman
                                    </span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col items-center justify-center gap-4">
                    <p className="text-sm text-slate-500 text-center">
                        © 2026 {APP_NAME}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
