import React from 'react';
import { TASKS } from './data';

export function TeamLeadDashboard() {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">Team Lead Dashboard</h2>
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Assign Tasks</h3>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Task Progress</h3>
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
