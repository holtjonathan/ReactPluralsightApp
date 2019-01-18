import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses //courses: courses (ES6 doesnt required both sides if ithe name is same)
            //shorthand property names
});

export default rootReducer;