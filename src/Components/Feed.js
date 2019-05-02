import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';

import '../styles.css';
import { fetchNewsFeed, getMoreNewsDetails } from '../Actions/myActions';
import noImage from '../Images/No_Image_Available.jpg';
import loadIcon from '../logo.svg';

class Feed extends Component{

    componentDidMount(){
        this.props.getNewsFeed();
    }

    render(){
        return <div className="feed">
            <h4>News Feed</h4>
            <div className="content">
                <div className="loading">
                    { this.props.loading && <Fragment><img src={loadIcon} className={"App-logo"} alt={"Loading"} data-test="loading"/><br/><span>Loading</span></Fragment> }
                </div>
                <ul>
                    {
                        Object.values(this.props.newsFeed).map((feed,index) => {
                            if(typeof(feed) === 'object'){
                                return (<li key={index}>
                                    <div className="news-content" data-test={"newsfeed-"+index} onClick={() => this.props.moreNewsDetail(index)}>
                                        <img src={feed.urlToImage!=null ? feed.urlToImage : noImage} alt="News Feed" />
                                        <div className="news-info">
                                            <h5>{feed.title}</h5>
                                            <div>{feed.description}</div>
                                        </div>
                                    </div>
                                </li>);
                            }
                            else {
                                return <div key={index}></div>
                            }
                        })
                    }
                </ul>
                { !this.props.loading && this.props.loading !== undefined && <div className="viewMore" onClick={() => this.props.loadMore((this.props.pageNumber) !== undefined ? this.props.pageNumber : 1)} />}
            </div>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNewsFeed: () => dispatch(fetchNewsFeed(1)),
        moreNewsDetail: (id) => dispatch(getMoreNewsDetails(id)),
        loadMore: (pageNumber) => {
            dispatch(getMoreNewsDetails(-1));
            dispatch(fetchNewsFeed(pageNumber));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        newsFeed: state.newsFeedReducer,
        loading: state.newsFeedReducer.loading,
        pageNumber: state.newsFeedReducer.pageNumber
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Feed);