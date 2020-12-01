import {login} from '../api/user';
import {loginSuccess, logoutSuccess} from '../store/userSlice';

export const loginAction = (username) => async dispatch => {
    try {
        const user = login(username);
        dispatch(loginSuccess({user}));
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