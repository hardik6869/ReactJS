import {createSlice} from '@reduxjs/toolkit';

const logoutSlice = createSlice({
    name: 'isLogin',
    initialState: false,
    reducers: {
        logout: (
            state: boolean,
            action: {
                payload: boolean | string;
                type: string;
            },
        ) => {
            localStorage.clear();
            return {
                isLogin: action.payload,
            };
        },
        login: (
            state: boolean,
            action: {payload: boolean | string; type: string},
        ) => {
            return {
                isLogin: action.payload,
            };
        },
    },
});

export default logoutSlice.reducer;
export const {login, logout} = logoutSlice.actions;
