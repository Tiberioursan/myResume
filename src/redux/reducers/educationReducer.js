import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
    education: [],
}

export const educationReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_EDUCATION:
            return { ...state, education: payload };
        default:
            return state;
    }
}