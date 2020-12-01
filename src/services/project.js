import {getProjectDetails} from '../api/project';
import {setProject} from '../store/projectSlice';

export const setProjectForUser = (projectKey) => async dispatch => {
    try {
        const project = getProjectDetails(projectKey);
        dispatch(setProject(project));
    } catch (e) {
        return console.error(e.message);
    }
};

