# Jira Lite - Internship Management Application

## Project Overview

Jira Lite is a lightweight project management and task tracking application designed for internship programs. The application provides role-based dashboards for Project Managers, Team Leads, and Team Members.

## Features

### Project Manager Dashboard
- Create new projects
- Assign Team Leads to projects
- View project overview

### Team Lead Dashboard
- Create tasks for assigned projects
- Assign tasks to team members
- Track task progress

### Team Member Dashboard
- View assigned tasks
- Update task status

## Technology Stack

- React
- React Hooks
- Context API for state management
- Tailwind CSS for styling
- Lucide React for icons

## Prerequisites

- Node.js (v17 or later)
- npm or yarn

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/jira-lite.git
cd jira-lite/forward
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Install additional dependencies
```bash
npm install tailwindcss lucide-react
# or
yarn add tailwindcss lucide-react
```

## Available Users

### Login Credentials
- Project Manager
    - Username: `pm_pm`
    - Password: `pmpass`

- Team Lead
    - Username: `tl_tl`
    - Password: `tlpass`

- Team Member
    - Username: `tm_tm`
    - Password: `tmpass`

## Running the Application

```bash
npm start
# or
yarn start
```

## Project Structure

- `App.js`: Main application component
- `authContext.js`: Authentication context
- `DataContext.js`: Data management context
- `LoginPage.js`: User authentication page
- `DashboardLayout.js`: Common layout for dashboards
- `ProjectManagerDashboard.js`: Dashboard for Project Managers
- `TeamLeadDashboard.js`: Dashboard for Team Leads
- `TeamMemberDashboard.js`: Dashboard for Team Members
- `data.js`: Mock data for users, projects, and tasks


## License

Distributed under the MIT License. See `LICENSE` for more information.
