import { fetchNewsFeed, getMoreNewsDetails } from './myActions';

describe('Actions', () => {
    test('returns an action of type `NEWS_FEED_DETAIL` ', () => {
        const id = 1;
        const action = getMoreNewsDetails(id);
        expect(action).toEqual({ type: 'NEWS_FEED_DETAIL', id: id });
    });
})