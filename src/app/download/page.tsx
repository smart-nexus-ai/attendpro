import { Metadata } from 'next';
import DownloadHero from '@/components/download/DownloadHero';
import DownloadCard from '@/components/download/DownloadCard';
import { TEACHER_APK_URL, STUDENT_APK_URL, PLAY_STORE_URL } from '@/lib/constants';
import { Cpu, HardDrive, Smartphone, Wifi, Rocket, ShieldCheck, Settings, Package } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
    title: 'Download | AttendPro',
    description: 'Download AttendPro apps for teachers and students. Digitize your classroom attendance today.',
};

export default function DownloadPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 pb-24">
            <DownloadHero />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
                {/* Download Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <DownloadCard
                        title="AttendPro"
                        subtitle="Teacher Only"
                        description="Complete attendance management system for teachers. Create sessions, manage students, mark attendance, and generate detailed reports with offline support."
                        icon="👨‍🏫"
                        features={[
                            "Create & manage attendance sessions",
                            "Mark attendance with offline support",
                            "Generate PDF reports with QR codes",
                            "Import students from Google Sheets",
                            "Defaulter tracking & analytics"
                        ]}
                        apkUrl={TEACHER_APK_URL}
                        playStoreUrl={PLAY_STORE_URL}
                        playStoreAvailable={false}
                    />
                    <DownloadCard
                        title="My Attendance"
                        subtitle="Student Only"
                        description="View your attendance records, check your percentage, and download reports. Stay informed about your attendance status across all subjects."
                        icon="🎓"
                        features={[
                            "View attendance across all subjects",
                            "Check attendance percentage",
                            "Download attendance reports",
                            "Get notified about low attendance",
                            "Dark mode support"
                        ]}
                        apkUrl={STUDENT_APK_URL}
                        playStoreUrl={PLAY_STORE_URL}
                        playStoreAvailable={false}
                    />
                </div>

                {/* Requirements & Installation Guide */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    {/* System Requirements */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-10 border border-slate-100 dark:border-slate-800">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tighter flex items-center">
                            <Smartphone className="w-6 h-6 mr-3 text-indigo-500" />
                            System Requirements
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                                    <ShieldCheck className="w-5 h-5 text-indigo-500" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-400">Android OS</p>
                                    <p className="font-bold text-slate-900 dark:text-white text-sm">8.0 (Oreo) or Higher</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                                    <Cpu className="w-5 h-5 text-indigo-500" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-400">Memory</p>
                                    <p className="font-bold text-slate-900 dark:text-white text-sm">Min 2GB RAM</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                                    <HardDrive className="w-5 h-5 text-indigo-500" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-400">Storage</p>
                                    <p className="font-bold text-slate-900 dark:text-white text-sm">120MB Free Space</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                                    <Wifi className="w-5 h-5 text-indigo-500" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-400">Connectivity</p>
                                    <p className="font-bold text-slate-900 dark:text-white text-sm">Online for setup</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Installation Guide */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-10 border border-slate-100 dark:border-slate-800">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tighter flex items-center">
                            <Settings className="w-6 h-6 mr-3 text-emerald-500" />
                            Installation Guide
                        </h3>
                        <div className="space-y-6">
                            {[
                                { step: 1, title: "Download", text: "Download the APK file from the buttons above.", icon: Package },
                                { step: 2, title: "Enable Sources", text: "Enable 'Install from Unknown Sources' in your Security settings.", icon: ShieldCheck },
                                { step: 3, title: "Install", text: "Open the downloaded APK and follow the installation prompts.", icon: Settings },
                                { step: 4, title: "Login", text: "Launch the app and sign in with your account to get started.", icon: Rocket },
                            ].map((item) => (
                                <div key={item.step} className="flex items-start space-x-4 group">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                        <span className="text-xs font-black">{item.step}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-snug">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dashboard CTA */}
                <div className="flex flex-col items-center text-center py-12 px-8 bg-gradient-to-br from-slate-900 to-indigo-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[60px] rounded-full -mt-20 -mr-20" />
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 italic">
                            Already have an account?
                        </h3>
                        <p className="text-indigo-200/70 font-medium mb-10 max-w-lg mx-auto">
                            Access the administrative dashboard to manage sessions, download detailed school-wide reports, and configure settings.
                        </p>
                        <Button
                            variant="primary"
                            size="lg"
                            href="/dashboard"
                            icon={Rocket}
                            className="bg-white text-indigo-950 hover:bg-indigo-50 border-none px-12 h-16 rounded-2xl shadow-2xl"
                        >
                            Go to Dashboard
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
