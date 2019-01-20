import * as types from '../actions/actionTypes';
import initialState from './initialState';

//takes the current state and action...returns a new state
export default function  courseReducer(state = initialState.courses, action) {
    switch(action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        
            //Spread operator - basically creates a copy of the existing list of courses
            //Then we save the new course into that new array
        case types.CREATE_COURSE_SUCCESS: {
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        }

            //state is immutable (important for React) so we cannot just change or add to the current state array, we have to create a new one and return that
            //Update is basically selecting everything in the course list except the one that was just updated and then adding the updated version of that course
        case types.UPDATE_COURSE_SUCCESS: {
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];
        }

    default:
        return state;
    }
}
