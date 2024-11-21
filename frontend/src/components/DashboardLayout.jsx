import React from 'react';
import { AuthContext } from './authContext';
import { NavItem } from './NavItem';
import {
    LayoutDashboard,
    Briefcase,
    ClipboardList,
    LogOut
} from 'lucide-react';
export function DashboardLayout({ children }) {
    const { user, logout } = React.useContext(AuthContext);

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="w-64 bg-white shadow-lg">
                <div className="flex items-center justify-center h-20 border-b">
                    <h1 className="text-2xl font-bold text-gray-800">Jira - Light</h1>
                </div>
                <nav className="p-4">
                    <div className="space-y-2">
                        <NavItem icon={<LayoutDashboard />} label="Dashboard" />
                        <NavItem icon={<Briefcase />} label="Projects" />
                        <NavItem icon={<ClipboardList />} label="Tasks" />
                        <div className="border-t my-4"></div>
                        <NavItem
                            icon={<LogOut />}
                            label="Logout"
                            onClick={logout}
                            className="text-red-500 hover:bg-red-50"
                        />
                    </div>
                </nav>
                <div className="p-4 text-sm text-gray-500">
                    Logged in as: {user.name} ({user.role})
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-8">
                {children}
            </div>
        </div>
    );
}
