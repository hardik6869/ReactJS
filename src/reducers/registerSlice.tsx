import {createSlice, Slice, SliceCaseReducers} from '@reduxjs/toolkit';
import {userAction} from '../component/interface/Interface';
const entities: userAction = {
    name: '',
    email: '',
    number: '',
    password: '',
    confirm_password: '',
    image: null,
    title: undefined,
};

const registerSlice: Slice<
    userAction,
    SliceCaseReducers<userAction>,
    'signup'
> = createSlice({
    name: 'signup',
    initialState: entities,
    reducers: {
        updateVal: (state, action) => {
            localStorage.setItem('login', JSON.stringify(action.payload));
            return {
                name: action.payload.name,
                email: action.payload.email,
                number: action.payload.number,
                password: action.payload.password,
                confirm_password: action.payload.confirm_password,
                image: action.payload.image,
            };
        },
    },
});

export default registerSlice.reducer;
export const {updateVal} = registerSlice.actions;
