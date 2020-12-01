import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import userReducer from './userSlice';
import projectReducer from './projectSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        project: projectReducer
    }
});

export default store;