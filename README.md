# Jira Lite: Project Management System

## Overview

Jira Lite is a lightweight project management system designed for small teams and startups. It offers essential features like task management, role-based access control, and progress tracking, without the complexity of larger tools like Jira. The app emphasizes simplicity, reliability, and ease of use to streamline project workflows.

## Features

### Role-Based Access Control (RBAC)

- **Project Manager**:
  - Create projects and manage timelines.
  - Assign team leads.
  - Oversee overall project progress.

- **Team Lead**:
  - Assign tasks to team members.
  - Track task progress and update status.

- **Team Member**:
  - Update task statuses.
  - Log work hours.

### Task Management

- Create, assign, edit, and delete tasks.
- Update task statuses: Pending, In Progress, Completed.
- View tasks sorted by deadlines or priority.

### Progress Tracking

- Visualize team performance using a task progress bar.
- Filter tasks by assignee, status, or due date.

### Responsive Design

- Fully responsive UI built with React and Tailwind CSS for a seamless experience across devices.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **State Management**: React Context API
- **Mock Backend**: JSON Server
- **Routing**: React Router

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/jira-lite.git
   cd jira-lite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Run a mock backend using JSON Server:
   ```bash
   npm install -g json-server
   json-server --watch db.json --port 5000
   ```

## Folder Structure

```
jira-lite/
├── public/
├── src/
│   ├── components/      # Reusable React components (buttons, modals, etc.)
│   ├── pages/           # Pages (Dashboard, Project View, User Management, etc.)
│   ├── context/         # Context for global state management
│   ├── services/        # API calls
│   ├── assets/          # Images, icons, and static assets
│   └── App.js           # Main app entry point
├── db.json              # Mock backend data
└── package.json
```

## Key Screens

### 1. Dashboard
- Overview of all projects and their progress.
- Quick stats for tasks: Pending, In Progress, Completed.

### 2. Project Management
- List of all projects with options to create, edit, or delete.
- Assign team leads and manage deadlines.

### 3. Task Management
- View and manage tasks for a specific project.
- Update task statuses or assign them to team members.

### 4. User Management
- Add, edit, and delete users.
- Assign roles (Project Manager, Team Lead, Team Member).

## API Endpoints (Mocked)

### Users
- `GET /users` – Fetch all users.
- `POST /users` – Add a new user.
- `PUT /users/:id` – Edit user details.
- `DELETE /users/:id` – Remove a user.

### Projects
- `GET /projects` – Fetch all projects.
- `POST /projects` – Add a new project.
- `PUT /projects/:id` – Edit project details.
- `DELETE /projects/:id` – Remove a project.

### Tasks
- `GET /tasks` – Fetch all tasks.
- `POST /tasks` – Add a new task.
- `PUT /tasks/:id` – Edit task details.
- `DELETE /tasks/:id` – Remove a task.

## License

This project is licensed under the MIT License. See the [LICENSE] file for details.
