import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import {newsFeedReducer, newsDetailReducer} from '../Reducers/newsFeedReducers';

export const rootReducer = combineReducers({
    newsFeedReducer,
    newsDetailReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));