import {createSlice} from '@reduxjs/toolkit';
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

export default userSlice.reducer;
