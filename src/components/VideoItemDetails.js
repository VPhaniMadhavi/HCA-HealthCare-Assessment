import React from 'react';


const VideoItemDetails = ({ video, handleVideoSelect }) => {
    return (
        <div className="">
            <div onClick={() => handleVideoSelect(video)} >
                <iframe className={{ width: '250px', height: '25px' }} className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
                <br></br>
                <div className='content' className={{ lineHeight: '0.3' }}>
                    <h6 style={{ fontWeight: 'bold' }}>{video.snippet.title}</h6>
                    <h9 style={{ fontWeight: 'bold' }}>{video.snippet.publishedAt}</h9>
                </div>
            </div>
        </div>
    )
};
export default VideoItemDetails;