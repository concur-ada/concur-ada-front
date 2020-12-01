import projects from './testData/projects.json';

export const getProjectDetails = (projectKey) => {
    let project;
    if (projectKey) {
        project = projects[projectKey];
    }
    return project;
};