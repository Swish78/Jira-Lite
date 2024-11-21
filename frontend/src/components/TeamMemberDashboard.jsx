import React from 'react';
import { TASKS } from './data';

export function TeamMemberDashboard() {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">Team Member Dashboard</h2>
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold mb-4">My Tasks</h3>
                    {TASKS.map(task => (
                        <div key={task.id} className="mb-2 p-2 bg-gray-100 rounded">
                            {task.name} - {task.status}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
