import { Metadata } from 'next';
import ContactInfo from '@/components/helpdesk/ContactInfo';
import TicketForm from '@/components/helpdesk/TicketForm';
import FAQSection from '@/components/helpdesk/FAQSection';
import { SUPPORT_EMAIL } from '@/lib/constants';
import { HelpCircle, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'HelpDesk | AttendPro',
    description: "Get technical support and answers to frequently asked questions about AttendPro's attendance management system.",
};

export default function HelpDeskPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* Simple Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden bg-white dark:bg-slate-900/50">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full -mt-20 -mr-20" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                        <Sparkles className="w-3 h-3" />
                        <span>Support Center</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">HelpDesk</span>
                    </h1>
                    <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
                        Need assistance with the app or the web dashboard? We&apos;re here to help you get the most out of AttendPro.
                    </p>
                </div>
            </section>

            {/* Support Content Grid */}
            <section className="py-12 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                        {/* Left Side: Contact Info */}
                        <div className="lg:col-span-2 space-y-8 h-full">
                            <ContactInfo />
                        </div>

                        {/* Right Side: Ticket Form */}
                        <div className="lg:col-span-3">
                            <TicketForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />

            {/* Bottom Footer CTA */}
            <section className="py-20 bg-slate-100 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-flex p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-xl mb-8 group cursor-pointer hover:scale-110 transition-transform">
                        <HelpCircle className="w-10 h-10 text-indigo-600" />
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">
                        Still need help?
                    </h2>
                    <p className="text-base text-slate-500 dark:text-slate-400 font-medium mb-10 leading-relaxed uppercase tracking-wider">
                        If you couldn&apos;t find your answer in the FAQs or prefer direct communication,
                        drop us a line below.
                    </p>
                    <a
                        href={`mailto:${SUPPORT_EMAIL}`}
                        className="text-xl md:text-2xl font-black text-indigo-600 dark:text-indigo-400 hover:underline underline-offset-8"
                    >
                        {SUPPORT_EMAIL}
                    </a>
                </div>
            </section>
        </main>
    );
}
