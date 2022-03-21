import {configureStore} from '@reduxjs/toolkit';
import practicalSlice from '../../reducers/practicalSlice';
export const store = configureStore({
    reducer: {
        practical: practicalSlice,
    },
});
