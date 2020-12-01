import {createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
    name: 'user',
    initialState: {
        project: null
    },
    reducers: {
        setProject: (state, action) => {
            state.project = action.payload;
        },
        updateProjectStage: (state, action) => {
            //update a stage
            const stageName = action.payload.stageName;
            state.project.stages[stageName] = action.payload.stage;
        }
    }
});

export const { setProject, updateProjectStage } = projectSlice.actions;
export default projectSlice.reducer;
