import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Feed from './Feed';
import { store } from '../Store/storeFeed';
import { fetchNewsFeed } from '../Actions/myActions';

Enzyme.configure({ adapter: new Adapter() })

/*
beforeEach(() => {
})
*/

const setup = (initialState) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Feed store={store} />).dive();
    return wrapper;
}

test('renders Feed component without error', () => {
    const wrapper = setup().dive();
    expect(wrapper.length).toBe(1);
});

test('Update state with fetch news feed', () => {
    const initialState = {
        newsDetailReducer:{},
        newsFeedReducer:{}
    };
    const store = storeFactory(initialState);
    store.dispatch(fetchNewsFeed(1));
    const newState = store.getState();
    const expectedState = {
        ...initialState,
        newsDetailReducer:{},
        newsFeedReducer:{}
    }
    expect(newState).toEqual(expectedState);
});