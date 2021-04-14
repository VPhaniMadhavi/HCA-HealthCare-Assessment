import React from 'react';
import '../style/videostyles.css';

const VideoItem = ({ video, handleVideoSelect }) => {
    return (
        <div onClick={() => handleVideoSelect(video)} className=' video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            &nbsp; &nbsp; &nbsp;<div className='content'>
                <div className='header '><h4 style={{ fontWeight: 'bold' }} >{video.snippet.title}</h4></div>
                <p style={{ fontWeight: 'bold' }} >{video.snippet.publishedAt}</p>
            </div>
        </div>
    )
};
export default VideoItem;