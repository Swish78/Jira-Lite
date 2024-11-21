export const USERS = [
    {
        id: 1,
        username: 'pm_pm',
        password: 'pmpass',
        role: 'Project Manager',
        name: 'Project Manager'
    },
    {
        id: 2,
        username: 'tl_tl',
        password: 'tlpass',
        role: 'Team Lead',
        name: 'Team Lead'
    },
    {
        id: 3,
        username: 'tm_tm',
        password: 'tmpass',
        role: 'Team Member',
        name: 'Team Member'
    }
];

export const PROJECTS = [
    {
        id: 1,
        name: 'Website Redesign',
        status: 'In Progress',
        description: 'Comprehensive website redesign and modernization project'
    },
    {
        id: 2,
        name: 'Mobile App Development',
        status: 'Initiated',
        description: 'Creating a new mobile application for business solutions'
    }
];

export const TASKS = [
    {
        id: 1,
        name: 'Design Homepage',
        status: 'Assigned',
        description: 'Create responsive and modern homepage design',
        project: 1
    },
    {
        id: 2,
        name: 'Develop Backend API',
        status: 'In Progress',
        description: 'Implement RESTful API for mobile application',
        project: 2
    }
];