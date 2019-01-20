import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses, //courses: courses (ES6 doesnt required both sides if ithe name is same)
            //shorthand property names
    authors,
    ajaxCallsInProgress
});

export default rootReducer;