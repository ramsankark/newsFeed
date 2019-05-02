import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../Store/storeFeed';

/**
    * @param wrapper - Enzyme shallow wrapper
    * @param value - String value, search the data-test attribute
*/
export const findByTestAttr = (wrapper, value) => {
    return wrapper.find(`[data-test='${value}']`);
}

export const storeFactory = (initialState) => {
    return createStore(rootReducer,initialState,applyMiddleware(thunk));
}