import * as types from '../actions/actionTypes';

//takes the current state and action...returns a new state
export default function  courseReducer(state = [], action) {
    switch(action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

    default:
        return state;
    }
}
