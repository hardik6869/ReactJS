import {createSlice} from '@reduxjs/toolkit';
import {UserDetails} from '../components/Interface/userAction';
import {userInfo} from '../components/User/Data/userInfo';
const initialState: {
    user: {
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        avatar: string;
        plan: string;
        status: string;
        access: string;
        reviewed: number;
        monthly_click: number;
    }[][];
} = {
    user: [userInfo],
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});

export const getAllUsers = (state: {user: UserDetails}): string =>
    state.user.user;
export default userSlice.reducer;
