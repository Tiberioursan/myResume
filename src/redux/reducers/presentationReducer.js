import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
    presentation: [],
}

export const presentationReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_PRESENTATION:
            return { ...state, presentation: payload };
        default:
            return state;
    }
}