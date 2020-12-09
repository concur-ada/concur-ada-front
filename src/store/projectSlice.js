import {createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
    name: 'project',
    initialState: {
        project: null
    },
    reducers: {
        setProject: (state, action) => {
            state.project = action.payload;
        },
        updateRole: (state, action) => {
            const {role, name, email} = action.payload;
            //update role details
            const people = state.project.stages.people;
            let hasRole = false;
            Object.keys(state.project.stages.people).forEach((key) => {
                if (role === key) {
                    people[key] = {name, email};
                    hasRole = true;
                    return;
                }
            });
            //add role if not present
            if (!hasRole){
                people[role]={name, email};
            }
            //check if mandatory roles are filled in
            const rolesInStore = Object.keys(state.project.stages.people);
            const mandatoryRoles = ['primarySponsor', 'projectManager'];
            const status = mandatoryRoles.reduce((complete, mRole) => {
                return complete = !!rolesInStore.find(element => element === mRole);
            });
            people.status = status ? 'completed' : 'progress';
        },
        updateProjectStage: (state, action) => {
            //update a stage
            const stageName = action.payload.stageName;
            state.project.stages[stageName] = action.payload.stage;
        }
    }
});

export const { setProject, updateRole, updateProjectStage } = projectSlice.actions;
export default projectSlice.reducer;
