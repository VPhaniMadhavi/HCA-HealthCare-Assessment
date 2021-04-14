import React from 'react';
import SearchBar from './Searchbar';
import youtube_api from '../apis/youtube_api.js';
import VideoList from './Videolist';
import VideoDetails from './Videodetails';
import MainComponent from './shared/MainComponent.js';

class Covid19Videos extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }
    fetchData = async () => {
        const response = await youtube_api.get('/playlistItems', {
            params: {
                playlistId: "PLogA9DP2_vSekxHP73PXaKD6nbOK56CJw",
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
            <div className="App">
                <div className='ui container' style={{ marginTop: '1em' }}>
                    <br></br>
                    <h4 style={{ fontWeight: 'bold' }} >Playlists</h4>
                    <div className='ui grid'>
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetails video={this.state.selectedVideo} />
                            </div>
                            <br></br> <br></br> <br></br>
                            <div className="five wide column">
                                <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Covid19Videos;

























