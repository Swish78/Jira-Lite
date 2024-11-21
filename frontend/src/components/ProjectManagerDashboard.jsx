import React from 'react';
import { PROJECTS } from './data';

export function ProjectManagerDashboard() {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">Project Manager Dashboard</h2>
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Create Project</h3>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Assign Team Leads</h3>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                    {PROJECTS.map(project => (
                        <div key={project.id} className="mb-2 p-2 bg-gray-100 rounded">
                            {project.name} - {project.status}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
