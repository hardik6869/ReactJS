import {createSlice} from '@reduxjs/toolkit';

const isLogin = {Login: false};

const LoginSlice = createSlice({
    name: 'isLogin',
    initialState: isLogin,
    reducers: {
        login: (state, action) => {
            localStorage.clear();
            return {
                isLogin: false,
            };
        },
    },
});

export default LoginSlice.reducer;
export const {login} = LoginSlice.actions;
