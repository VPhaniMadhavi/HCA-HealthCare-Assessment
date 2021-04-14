
import React, { useState, useEffect } from 'react';
import SearchBar from './Searchbar';
import youtube_api from '../apis/youtube_api.js';
import VideoList from './Videolist';
import VideoDetails from './Videodetails';
import CategoryDetailList from './CategoryDetailList';
class AllVideos extends React.Component {
    state = {
        catergoryvideos: [],
        videos: [],
        selectedVideo: null,
        catergoryId: null,
        categoryTitle: null,

    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube_api.get('/search', {
            params: {
                q: termFromSearchBar,
                channelId: "UCL03ygcTgIbe36o2Z7sReuQ",
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.fetchSelectedList(video.id);
        this.setState({
            categoryTitle: video.snippet.title
        })
    }
    displayVideo = (video) => {
        this.setState({ selectedVideo: video })
    }
    fetchSelectedList = async (id) => {
        console.log("selected", id);
        const response1 = await youtube_api.get('/playlistItems', {
            params: {
                playlistId: id,
                channelId: "UCL03ygcTgIbe36o2Z7sReuQ",
            }
        })
        this.setState({
            catergoryvideos: response1.data.items
        })

        console.log("selected", this.catergoryvideos);
    };

    fetchData = async () => {
        const response = await youtube_api.get('/playlists', {
            params: {
                channelId: "UCL03ygcTgIbe36o2Z7sReuQ",
            }
        })
        this.setState({
            videos: response.data.items
        })
        console.log("this is resp", this.videos);
    };
    componentDidMount() {
        this.fetchData();
    };
    render() {
        return (
            <div className="">
                <div className='ui container' style={{ marginTop: '1em' }}>
                    <div className='ui container' style={{ marginTop: '1em' }}>
                        <br></br>
                        <h4 style={{ fontWeight: 'bold' }} >Playlists</h4>
                        <div className='ui grid'>
                            <div className="ui row">
                                <div className="eleven wide column">
                                    <VideoDetails video={this.state.selectedVideo} />
                                </div>
                                <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                                <div className="row">
                                    <div className="col col-8">
                                        <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
                                    </div>
                                    <div className="col col-4 scroll">
                                        <h4 style={{ fontWeight: 'bold' }}>{this.state.categoryTitle}</h4>
                                        <CategoryDetailList className="" handleVideoSelect={this.displayVideo} videos={this.state.catergoryvideos} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AllVideos;










