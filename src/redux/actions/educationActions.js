import * as ActionTypes from '../constants/ActionTypes';

export const addEducation = (education) => {
    return {
        type: ActionTypes.ADD_EDUCATION,
        payload: education
    };
};

export const editEducation = (id, school, date, description) => {
    return {
        type: ActionTypes.EDIT_EDUCATION,
        
    };
};