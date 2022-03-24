import {createSlice, Slice} from '@reduxjs/toolkit';
import {React_Pract} from '../component/Practicals/React_Practical';
const initialState = {
    practical: [React_Pract],
};

const practicalSlice: Slice<
    {
        practical: {
            id: number;
            title: string;
            decription: string;
            image: string;
            demo: string;
        }[][];
    },
    // eslint-disable-next-line @typescript-eslint/ban-types
    {},
    'Practicals'
> = createSlice({
    name: 'Practicals',
    initialState,
    reducers: {},
});

export default practicalSlice.reducer;
