import React, { Component } from 'react';

//Import Components
import './App.css';
import logo from './Images/logo.webp';
import Feed from './Components/Feed';
import FeedDetails from './Components/FeedDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="news-ribbon">
          <img src={logo} alt="Logo" data-test='google-logo' />
          <h2>Google News</h2>
        </div>
        <div className="news-container">
          <Feed/>
          <FeedDetails/>
        </div>
      </div>
    );
  }
}

export default App;
