import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
    experience: []
}

export const experienceReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.ADD_EXPERIENCE:
            return { ...state, experience: payload };
        default:
            return state;
    }
}