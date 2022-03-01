import {AnyAction, configureStore, EnhancedStore} from '@reduxjs/toolkit';
import userSlice from '../reducers/userSlice';
export const store: EnhancedStore<
    {
        user: {
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
        };
    },
    AnyAction
> = configureStore({
    reducer: {
        user: userSlice,
    },
});
