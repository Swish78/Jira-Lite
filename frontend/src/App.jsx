import React, { useState } from 'react';
import { AuthContext } from './components/authContext.jsx';
import { LoginPage } from './components/LoginPage';
import { DashboardLayout } from './components/DashboardLayout.jsx';
import { ProjectManagerDashboard } from './components/ProjectManagerDashboard';
import { TeamLeadDashboard } from './components/TeamLeadDashboard';
import { TeamMemberDashboard } from './components/TeamMemberDashboard';

export const USERS = [
    {
        id: 1,
        username: 'pm_pm',
        password: 'pmpass',
        role: 'Project Manager',
        name: 'Project Manager'
    },
    {
        id: 2,
        username: 'tl_tl',
        password: 'tlpass',
        role: 'Team Lead',
        name: 'Team Lead'
    },
    {
        id: 3,
        username: 'tm_tm',
        password: 'tmpass',
        role: 'Team Member',
        name: 'Team Member'
    }
];

function InternshipManagementApp() {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (username, password) => {
        const foundUser = USERS.find(u => u.username === username && u.password === password);
        if (foundUser) {
            setUser(foundUser);
            setIsAuthenticated(true);
        } else {
            alert('Invalid credentials');
        }
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            <div className="min-h-screen bg-gray-50">
                {!isAuthenticated ? <LoginPage /> : (
                    <DashboardLayout>
                        {user.role === 'Project Manager' && <ProjectManagerDashboard />}
                        {user.role === 'Team Lead' && <TeamLeadDashboard />}
                        {user.role === 'Team Member' && <TeamMemberDashboard />}
                    </DashboardLayout>
                )}
            </div>
        </AuthContext.Provider>
    );
}

export default InternshipManagementApp;
