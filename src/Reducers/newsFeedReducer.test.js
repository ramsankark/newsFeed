import { newsFeedReducer,newsDetailReducer } from './newsFeedReducers';
import { getMoreNewsDetails } from '../Actions/myActions';

const initialState = undefined;

describe('return newsFeedReducer tests', () => {
    test('returns newsFeedReducer default state', () => {
        const initalAction = {};
        const newState = newsFeedReducer(initialState,initalAction);
        expect(newState).toEqual(initalAction);
    });
    
    test('returns `NEWS_FEED` state', () => {
        const page = 1;
        const result = {
            articles: [{ title: 'newsTitle1', content: 'newsContent1' }, { title: 'newsTitle2', content: 'newsContent2' }]
        };
        const initalAction = {type:'NEWS_FEED', payload: result, pageNumber: page}
        const newState = newsFeedReducer(initialState,initalAction);
        expect(newState).toEqual(Object.assign({},result,{loading: false},{pageNumber: (page + 1)}))
    });
    
    test('returns `LOADING` state', () => {
        const initalAction = { type:'LOADING' }
        const newState = newsFeedReducer(initialState,initalAction);
        expect(newState).toEqual({ loading: true });
    });
});

describe('return newsDetailReducer tests', () => {
    test('returns newsDetailReducer default state', () => {
        const initalAction = {};
        const newState = newsDetailReducer(initialState,initalAction);
        expect(newState).toEqual(initalAction);
    });

    test('returns `NEWS_FEED_DETAIL` state', () => {
        const id = 3;
        const actionFeed = getMoreNewsDetails(id);
        const newState = newsDetailReducer(initialState,actionFeed);
        expect(newState).toEqual({id: id});
    });
});