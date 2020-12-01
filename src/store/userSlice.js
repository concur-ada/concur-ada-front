import {createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.user;
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        logoutSuccess: (state) => {
            //clear the store
            state.user = null;
            localStorage.removeItem('user');
        }
    }
});

export const { loginSuccess, logoutSuccess } = userSlice.actions;
export default userSlice.reducer;
