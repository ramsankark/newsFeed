export const newsFeedReducer = (state = [],action) => {
    const newState = {...state};
    switch(action.type){
        case 'NEWS_FEED':
            return Object.assign({}, state, action.payload, {pageNumber: action.pageNumber + 1}, {loading:false});
        case 'LOADING':
            return {
                loading: true
            }
        default:
            return newState;
    }
}

export const newsDetailReducer = (state = {},action) => {
    const newState = {...state};
    switch(action.type){
        case 'NEWS_FEED_DETAIL':
            return {
                id: action.id
            }
        default:
            return newState;
    }
}