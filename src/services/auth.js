import {login} from '../api/user';
import {setProjectForUser} from '../services/project';
import {loginSuccess, logoutSuccess} from '../store/userSlice';

export const loginAction = (username) => async dispatch => {
    try {
        const user = login(username);
        dispatch(loginSuccess(user));
        dispatch(setProjectForUser(user.projectKey));
    } catch (e) {
        return console.error(e.message);
    }
};

export const logoutAction = () => async dispatch => {
    try {
        return dispatch(logoutSuccess());
    } catch (e) {
        return console.error(e.message);
    }
};