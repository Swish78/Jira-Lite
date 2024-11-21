import React from "react";

function TaskStatus({ project }) {
    return (
        <div className="task-status">
            <h2>{project.name}</h2>
            <div className="task-progress">
                {project.tasks.map((task) => (
                    <div key={task.id} className={`task ${task.status.toLowerCase()}`}>
                        {task.name} - {task.status}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskStatus;
