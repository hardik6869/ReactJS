import {configureStore} from '@reduxjs/toolkit';
import logoutSlice from '../../reducers/logoutSlice';
import practicalSlice from '../../reducers/practicalSlice';
import registerSlice from '../../reducers/registerSlice';
export const store = configureStore({
    reducer: {
        practical: practicalSlice,
        register: registerSlice,
        login: logoutSlice,
    },
});
