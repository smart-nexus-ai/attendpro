import { Metadata } from 'next';
import DashboardHero from '@/components/dashboard/DashboardHero';
import PortalGrid from '@/components/dashboard/PortalGrid';
import { DASHBOARD_URL } from '@/lib/constants';
import { Info, HelpCircle, ArrowRight, Smartphone, LayoutDashboard, UserCheck, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Dashboard | AttendPro',
    description: 'Access the AttendPro web portals for teachers, students, and administrators.',
};

const flowSteps = [
    { icon: Smartphone, label: "Landing Page" },
    { icon: ArrowRight, label: "next", isArrow: true },
    { icon: LayoutDashboard, label: "Dashboard Hub" },
    { icon: ArrowRight, label: "next", isArrow: true },
    { icon: UserCheck, label: "Select Portal" },
    { icon: ArrowRight, label: "next", isArrow: true },
    { icon: LogIn, label: "Secure Login" },
];

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 pb-24">
            <DashboardHero />

            {/* Visual Flow Indicator */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="bg-slate-50 dark:bg-slate-900/40 rounded-3xl p-8 border border-slate-100 dark:border-slate-800/60 overflow-x-auto scrollbar-hide">
                    <div className="flex items-center justify-between min-w-[800px] px-8">
                        {flowSteps.map((step, idx) => {
                            if (step.isArrow) {
                                return (
                                    <ArrowRight key={idx} className="w-5 h-5 text-slate-300 dark:text-slate-700" />
                                );
                            }
                            const Icon = step.icon;
                            return (
                                <div key={idx} className="flex flex-col items-center space-y-3">
                                    <div className={cn(
                                        "w-12 h-12 rounded-xl flex items-center justify-center transition-all shadow-sm",
                                        idx === 2 ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" : "bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-600 border border-slate-100 dark:border-slate-800"
                                    )}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <span className={cn(
                                        "text-[10px] font-black uppercase tracking-widest",
                                        idx === 2 ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400"
                                    )}>
                                        {step.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <PortalGrid />

            {/* Bottom Info Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 flex items-start space-x-4 p-8 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-3xl border border-indigo-100 dark:border-indigo-800/30">
                    <div className="bg-indigo-100 dark:bg-indigo-800/40 p-2 rounded-lg">
                        <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                        <h4 className="text-sm font-black text-indigo-900 dark:text-indigo-100 uppercase tracking-tighter mb-2">
                            Unified Access Notice
                        </h4>
                        <p className="text-sm text-indigo-800/70 dark:text-indigo-300/60 font-medium leading-relaxed">
                            All interactive portals listed above redirect to the **AttendPro Web Dashboard** hosted securely at <a href={DASHBOARD_URL} className="underline font-black text-indigo-600 dark:text-indigo-400">{DASHBOARD_URL.replace('https://', '')}</a>.
                            Your credentials remain consistent across both mobile and web platforms.
                        </p>
                    </div>
                </div>

                <div className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col justify-center">
                    <div className="flex items-center space-x-3 mb-4">
                        <HelpCircle className="w-5 h-5 text-emerald-500" />
                        <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                            Need help choosing?
                        </h4>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-6">
                        Teachers manage classroom sessions, while students track their own progress. Admissions/HR staff typically use the Administrative panels.
                    </p>
                    <Button
                        variant="ghost"
                        size="sm"
                        href="/helpdesk"
                        className="justify-start px-0 text-indigo-600 dark:text-indigo-400 hover:bg-transparent"
                    >
                        Visit Help Center &rarr;
                    </Button>
                </div>
            </div>
        </main>
    );
}
