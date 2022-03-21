import {createSlice} from '@reduxjs/toolkit';
import {React_Pract} from '../component/Practicals/React_Practical';
const initialState = {
    practical: [React_Pract],
};

const practicalSlice = createSlice({
    name: 'Practicals',
    initialState,
    reducers: {},
});

export default practicalSlice.reducer;
