import {userInfo} from '../../components/User/userInfo';
import {ActionTypes} from '../contatnt/action-types';

const initialState = {
    user: userInfo,
};

export const userReducer = (state = initialState, {type, payload}: any) => {
    switch (type) {
        case ActionTypes.SET_USER_PROFILE:
            return {...state, user: payload};
        default:
            return state;
    }
};
