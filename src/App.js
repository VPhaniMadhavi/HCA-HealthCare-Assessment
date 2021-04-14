
import React, { useState, useEffect } from 'react';
import SearchBar from './components/Searchbar';
import youtube_api from './apis/youtube_api.js';
import VideoList from './components/Videolist';
import VideoDetails from './components/Videodetails';
import { FaceRounded } from '@material-ui/icons';
import MainComponent from './components/shared/MainComponent.js';
import videostyles from './style/videostyles.css';
import Covid19Videos from './components/Covid19Videos';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MainComponent />
      </div >
    );
  }
}
export default App;










