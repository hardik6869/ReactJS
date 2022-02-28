import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: [],
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        showUsers: (state, {payload}) => {
            state.user = payload;
        },
    },
});

export const {showUsers} = userSlice.actions;
export const getAllUsers = (state: {user: any}) => state.user.user;
export default userSlice.reducer;
