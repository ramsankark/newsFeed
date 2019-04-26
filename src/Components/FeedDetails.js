import React, { Component } from 'react';
import {connect} from 'react-redux';

import '../styles.css';
import noImage from '../Images/No_Image_Available.jpg';
import {LoremIpsum} from './LoremIpsum';

class FeedDetails extends Component{
    render(){
        if(this.props.content[this.props.id] !== undefined || this.props.content[this.props.id] > 0){
            return <div className="feed-details">
                <h4>Full Story</h4>
                {
                    Object.values(this.props.content).map((detail, index) => {
                        if(index === this.props.id){
                            return <div className="content" key={index}>
                                <img src={detail.urlToImage!=null ? detail.urlToImage : noImage} alt="News Feed" />
                                <p>{detail.content}</p>
                                <LoremIpsum />
                                <LoremIpsum />
                            </div>
                        }
                        else {
                            return <div className="content" key={index}></div>
                        }
                    })
                }
            </div>
        }
        else {
            return <div className="feed-details">
                <h4>Full Story</h4>
                <div className="empty-content">Click on the news feed</div>
            </div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.newsDetailReducer.id,
        content: state.newsFeedReducer
    }
}

export default connect(mapStateToProps) (FeedDetails);