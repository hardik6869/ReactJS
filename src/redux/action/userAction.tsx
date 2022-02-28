import {ActionTypes} from '../contatnt/action-types';
export const setUser = (user: any) => {
    return {
        type: ActionTypes.SET_USER_PROFILE,
        payload: user,
    };
};

export const selectUser = (user: any) => {
    return {
        type: ActionTypes.SELECTED_USER,
        payload: user,
    };
};
