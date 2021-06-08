import { combineReducers } from 'redux';
import { presentationReducer } from './presentationReducer';
import { educationReducer} from './educationReducer';
import { experienceReducer } from './experienceReducer';

export const reducers = combineReducers({
    presentation: presentationReducer,
    education: educationReducer,
    experience: experienceReducer
});

export default reducers;