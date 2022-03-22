import {configureStore} from '@reduxjs/toolkit';
import practicalSlice from '../../reducers/practicalSlice';
import registerSlice from '../../reducers/registerSlice';
export const store = configureStore({
    reducer: {
        practical: practicalSlice,
        register: registerSlice,
    },
});
