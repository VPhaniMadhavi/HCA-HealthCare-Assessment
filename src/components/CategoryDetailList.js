import React from 'react';
import VideoItemDetails from './VideoItemDetails';

const CategoryDetailList = ({ videos, handleVideoSelect }) => {
    const renderedVideos = videos.map((video) => {
        return <VideoItemDetails key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });
    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};

export default CategoryDetailList;