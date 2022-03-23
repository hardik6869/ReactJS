import {createSlice} from '@reduxjs/toolkit';

const isLogin = {Login: false};

const logoutSlice = createSlice({
    name: 'isLogin',
    initialState: isLogin,
    reducers: {
        login: (state, action) => {
            localStorage.clear();
            return {
                isLogin: false,
            };
        },
        logout: (state, action) => {
            localStorage.clear();
            return {
                isLogin: true,
            };
        },
    },
});

export default logoutSlice.reducer;
export const {login, logout} = logoutSlice.actions;
