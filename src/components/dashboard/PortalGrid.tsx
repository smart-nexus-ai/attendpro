'use client';

import React from 'react';
import PortalCard from './PortalCard';
import { DASHBOARD_URL } from '@/lib/constants';

const portals: any[] = [
    {
        title: "Teacher Portal",
        icon: "👨‍🏫",
        color: "indigo",
        description: "Manage sessions, mark attendance, and generate reports for your classes.",
        features: ["Login to your account", "Create & manage sessions", "Mark & edit attendance", "Download PDF reports"],
        href: DASHBOARD_URL + "/teacher"
    },
    {
        title: "Student Portal",
        icon: "🎓",
        color: "emerald",
        description: "View your attendance records and download reports across all subjects.",
        features: ["Login to your account", "View attendance history", "Check attendance percentage", "Download attendance report"],
        href: DASHBOARD_URL + "/student"
    },
    {
        title: "Admin Panel",
        icon: "🛠️",
        color: "amber",
        description: "Manage users, approve teachers, and monitor system health.",
        features: ["Manage all users", "Approve teacher registrations", "Monitor active sessions", "View system logs"],
        href: DASHBOARD_URL + "/admin",
        badge: "Restricted"
    },
    {
        title: "Analytics Panel",
        icon: "📊",
        color: "purple",
        description: "View institution-wide attendance analytics and trends.",
        features: ["Institution-wide statistics", "Attendance trends & charts", "Department comparisons", "Export analytics data"],
        href: DASHBOARD_URL + "/analytics",
        badge: "Coming Soon"
    }
];

const PortalGrid: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                {portals.map((portal, idx) => (
                    <PortalCard
                        key={idx}
                        {...portal}
                    />
                ))}
            </div>
        </div>
    );
};

export default PortalGrid;
