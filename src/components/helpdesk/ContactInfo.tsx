'use client';

import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Copy, Check } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { SUPPORT_EMAIL, SUPPORT_PHONE, WORKING_HOURS } from '@/lib/constants';

interface ContactRowProps {
    icon: React.ElementType;
    label: string;
    value: string;
    href?: string;
    copyable?: boolean;
}

const ContactRow: React.FC<ContactRowProps> = ({ icon: Icon, label, value, href, copyable }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-start space-x-4 group p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                <Icon className="w-5 h-5" />
            </div>
            <div className="flex-grow min-w-0">
                <p className="text-[10px] font-black uppercase text-slate-400 mb-1 tracking-widest">{label}</p>
                {href ? (
                    <a
                        href={href}
                        className="text-slate-900 dark:text-white font-bold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block truncate"
                    >
                        {value}
                    </a>
                ) : (
                    <p className="text-slate-900 dark:text-white font-bold block truncate">{value}</p>
                )}
            </div>
            {copyable && (
                <button
                    onClick={() => handleCopy(value)}
                    className="p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 shadow-sm transition-all"
                    title={`Copy ${label}`}
                >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-400" />}
                </button>
            )}
        </div>
    );
};

const ContactInfo: React.FC = () => {
    return (
        <Card className="p-8 border-l-8 border-l-indigo-600 h-full">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tighter">
                Official Contact
            </h3>

            <div className="space-y-2">
                <ContactRow
                    icon={Mail}
                    label="Email Address"
                    value={SUPPORT_EMAIL}
                    href={`mailto:${SUPPORT_EMAIL}`}
                    copyable
                />
                <ContactRow
                    icon={Phone}
                    label="Phone Number"
                    value={SUPPORT_PHONE}
                    href={`tel:${SUPPORT_PHONE.replace(/[^0-9+]/g, '')}`}
                    copyable
                />
                <ContactRow
                    icon={Clock}
                    label="Working Hours"
                    value={WORKING_HOURS + " (Mon-Fri)"}
                />
                <ContactRow
                    icon={MapPin}
                    label="Location"
                    value="Cooch Behar, West Bengal, India"
                />
            </div>

            <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-relaxed text-center italic">
                    &quot;Our support team typically responds to emails within 24 hours. For urgent session issues, please reach out via phone.&quot;
                </p>
            </div>
        </Card>
    );
};

export default ContactInfo;
