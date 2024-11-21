// main app component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Users from './pages/Users';

const App = () => {
    return (
        <Router>
            <div className="p-4">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/users" element={<Users />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
