import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
    courses, //courses: courses (ES6 doesnt required both sides if ithe name is same)
            //shorthand property names
    authors
});

export default rootReducer;