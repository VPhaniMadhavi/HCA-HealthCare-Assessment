import React from 'react';
import '../style/videostyles.css';
import VideoList from './Videolist';
import VideoDetails from './Videodetails';
import youtube_api from '../apis/youtube_api.js';

class Searchbar extends React.Component {
    state = {
        term: '',
        videos: [],
        selectedVideo: null
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
        this.getVideosBySearch(this.state.term);
    }

    getVideosBySearch = async (searchTerm) => {
        const response = await youtube_api.get('/search', {
            params: {
                part: 'snippet',
                q: searchTerm,
                maxResults: 15,
                channelId: "UCL03ygcTgIbe36o2Z7sReuQ",
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    render() {
        return (
            <>
                <div className='ui container' style={{ marginTop: '1em' }}>
                    <div className='search-bar ui segment'>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search" onChange={this.handleChange} className='form-control col-lg-8'></input>
                            &nbsp;  &nbsp;  <button class="btn btn-primary my-2 my-sm-0" type="submit" value={this.state.term} >Search</button>
                        </form>
                        <div className='ui grid'>
                            <div className="ui row">
                                <div className="eleven wide column">
                                    <VideoDetails video={this.state.selectedVideo} />
                                </div>
                                <div className="five wide column">
                                    <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Searchbar;
