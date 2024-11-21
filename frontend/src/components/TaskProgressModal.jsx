import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

export function TaskProgressModal({
                                      isOpen,
                                      onClose,
                                      task,
                                      onUpdateProgress
                                  }) {
    const [status, setStatus] = useState(task.status);
    const [hoursWorked, setHoursWorked] = useState(0);
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedTask = {
            ...task,
            status,
            hoursWorked,
            progressNotes: notes
        };

        onUpdateProgress(updatedTask);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">Update Task Progress</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Task</label>
                        <input
                            type="text"
                            value={task.name}
                            disabled
                            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                        >
                            <option value="Not Started">Not Started</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Blocked">Blocked</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Hours Worked</label>
                        <input
                            type="number"
                            value={hoursWorked}
                            onChange={(e) => setHoursWorked(parseFloat(e.target.value))}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            min="0"
                            step="0.5"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Progress Notes</label>
                        <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            rows={3}
                            placeholder="Add any additional notes about the task progress"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                        <CheckCircle size={20} className="mr-2" /> Update Progress
                    </button>
                </form>
            </div>
        </div>
    );
}