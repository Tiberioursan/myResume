import * as ActionTypes from '../constants/ActionTypes';

export const addExperience = (experience) => {
    return {
        type: ActionTypes.ADD_EXPERIENCE,
        payload: experience
    };
};

export const editExperience = () => {
    return {
        type: ActionTypes.EDIT_EXPERIENCE
    };
};