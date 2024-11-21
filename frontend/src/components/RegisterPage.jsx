import React, { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("PM");
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/users", { username, password, role });
            alert("User registered successfully");
        } catch (error) {
            console.error(error);
            setError("Something went wrong!");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-lg w-80">
                <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="PM">Project Manager</option>
                            <option value="TL">Team Lead</option>
                            <option value="TM">Team Member</option>
                        </select>
                    </div>
                    {error && <div className="text-red-500 text-center mb-4">{error}</div>}
                    <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
