import * as ActionTypes from '../constants/ActionTypes';

export const addPresentation = (presentation) => {
    return {
        type: ActionTypes.ADD_PRESENTATION,
        payload: presentation
    };
};

export const editPresentation = (title, subtitle, description) => {
    return {
        type: ActionTypes.EDIT_PRESENTATION,
        
    };
};

