const pageSize = 5;

export function fetchNewsFeed(pageNumber){
    return (dispatch) => fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=' + pageSize + '&page=' + pageNumber + '&apiKey=57f3c75adf284a85a938f45174549c21',{ method: 'GET' })
        .then(response => response.json())
        .then(json => {
            dispatch(displayLoading());
            //To test loading 3sec delay introduced
            setTimeout(() => {
                dispatch(getNewsFeed(json, pageNumber));
            },3000);
        })
        .catch(err => console.log(err));
}

function getNewsFeed(result, page){
    return {
        type: 'NEWS_FEED',
        payload: result.articles,
        pageNumber: page
    }
}

function displayLoading(){
    return {
        type: 'LOADING'
    }
}

export function getMoreNewsDetails(id){
    return {
        type: 'NEWS_FEED_DETAIL',
        id: id
    }
}