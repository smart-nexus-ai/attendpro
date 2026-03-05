'use client';

import React, { useState } from 'react';
import { Send, Paperclip, CheckCircle2, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const categories = ["App Issue", "Login Problem", "Attendance Sync", "Report Generation", "Feature Request", "Other"];
const priorities = ["Low", "Medium", "High"];

const TicketForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        category: categories[0],
        subject: '',
        description: '',
        priority: 'Medium',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
        if (!formData.subject) newErrors.subject = "Subject is required";
        if (!formData.description) newErrors.description = "Description is required";
        else if (formData.description.length < 20) newErrors.description = "Min 20 characters required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        // TODO: Connect to actual ticket API (email service/Firebase/etc)
        await new Promise(resolve => setTimeout(resolve, 2000));

        setLoading(false);
        setStatus('success');
        setFormData({
            name: '',
            email: '',
            category: categories[0],
            subject: '',
            description: '',
            priority: 'Medium',
        });
    };

    if (status === 'success') {
        return (
            <Card className="p-12 flex flex-col items-center text-center justify-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-2">Ticket Submitted!</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm mb-8">
                    We&apos;ve received your request. Our support team will get back to you within 24 hours.
                </p>
                <Button variant="secondary" onClick={() => setStatus('idle')}>
                    Submit Another Ticket
                </Button>
            </Card>
        );
    }

    return (
        <Card className="p-8 shadow-xl shadow-slate-200/50 dark:shadow-none">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tighter">
                Submit a Support Ticket
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-8">
                Fill out the form below and our technical team will assist you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest pl-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Rahul Sharma"
                            className={cn(
                                "w-full px-5 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border transition-all text-sm font-bold placeholder:text-slate-400",
                                errors.name ? "border-red-500" : "border-slate-100 dark:border-slate-800 focus:border-indigo-500 outline-none"
                            )}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        {errors.name && <p className="text-[10px] font-bold text-red-500 pl-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest pl-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="rahul@example.com"
                            className={cn(
                                "w-full px-5 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border transition-all text-sm font-bold placeholder:text-slate-400",
                                errors.email ? "border-red-500" : "border-slate-100 dark:border-slate-800 focus:border-indigo-500 outline-none"
                            )}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <p className="text-[10px] font-bold text-red-500 pl-1">{errors.email}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest pl-1">Category</label>
                        <select
                            className="w-full px-5 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 focus:border-indigo-500 outline-none text-sm font-bold appearance-none cursor-pointer"
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        >
                            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest pl-1">Subject</label>
                        <input
                            type="text"
                            placeholder="Short summary of issue"
                            className={cn(
                                "w-full px-5 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border transition-all text-sm font-bold placeholder:text-slate-400",
                                errors.subject ? "border-red-500" : "border-slate-100 dark:border-slate-800 focus:border-indigo-500 outline-none"
                            )}
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                        {errors.subject && <p className="text-[10px] font-bold text-red-500 pl-1">{errors.subject}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest pl-1">Description</label>
                    <textarea
                        rows={4}
                        placeholder="Please describe your issue in detail..."
                        className={cn(
                            "w-full px-5 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border transition-all text-sm font-bold placeholder:text-slate-400 resize-none",
                            errors.description ? "border-red-500" : "border-slate-100 dark:border-slate-800 focus:border-indigo-500 outline-none"
                        )}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                    {errors.description && <p className="text-[10px] font-bold text-red-500 pl-1">{errors.description}</p>}
                </div>

                <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest pl-1">Priority Level</label>
                    <div className="flex space-x-6">
                        {priorities.map(p => (
                            <label key={p} className="flex items-center space-x-2 cursor-pointer group">
                                <input
                                    type="radio"
                                    name="priority"
                                    className="w-4 h-4 text-indigo-600 focus:ring-0 cursor-pointer"
                                    checked={formData.priority === p}
                                    onChange={() => setFormData({ ...formData, priority: p })}
                                />
                                <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 transition-colors">
                                    {p}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer group">
                        <Paperclip className="w-4 h-4 mr-2" />
                        <span className="text-xs font-bold uppercase tracking-wider">Attach Screenshot (Optional)</span>
                    </div>
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full sm:w-auto min-w-[180px]"
                        disabled={loading}
                    >
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Submit Ticket <Send className="w-4 h-4 ml-2" /></>}
                    </Button>
                </div>

                <p className="text-[10px] font-bold text-slate-400 uppercase italic">
                    Note: For urgent issues during working hours, please call us directly.
                </p>
            </form>
        </Card>
    );
};

export default TicketForm;
