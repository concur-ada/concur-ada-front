import {getProjectDetails} from '../api/project';
import {setProject, updateRole} from '../store/projectSlice';

export const setProjectForUser = (projectKey) => async dispatch => {
    try {
        const project = getProjectDetails(projectKey);
        dispatch(setProject(project));
    } catch (e) {
        return console.error(e.message);
    }
};

export const setRoleInfo = (roleInfo) => async dispatch => {
    try {
        dispatch(updateRole(roleInfo));
    } catch (e) {
        return console.error(e.message);
    }
};

