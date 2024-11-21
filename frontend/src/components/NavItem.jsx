import React from 'react';

export function NavItem({ icon, label, onClick, className = '' }) {
    return (
        <div
            onClick={onClick}
            className={`flex items-center p-3 rounded-lg cursor-pointer 
        hover:bg-blue-50 transition-colors 
        ${className}`}
        >
            {icon}
            <span className="ml-3 text-gray-700">{label}</span>
        </div>
    );
}
