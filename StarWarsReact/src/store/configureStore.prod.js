import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk) // reduxImmutableStateInvariant()) //reduxImmutable is for DEV only - warns when you accidentally mutate state
    );
}