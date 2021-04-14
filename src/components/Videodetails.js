
import React from 'react';
import YouTube from 'react-youtube';

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div></div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id}`;
  console.log(typeof (video));
  const opts = {
    height: '490',
    width: '840'
  };

  const { resourceId, title } = video.snippet;

  return (
    <div>
      <div className='ui embed'>
        <YouTube style={{ width: '90px' }} opts={opts} videoId={resourceId.videoId} />
      </div>
      <div className='ui segment'>
        <h4 style={{ fontWeight: 'bold' }} className='ui title'>{video.snippet.title}</h4>
        <h6> <p>{video.snippet.description}</p></h6>
        <h7 style={{ fontWeight: 'bold' }} >{video.snippet.publishedAt}</h7>

      </div>
    </div>

  )
}
export default VideoDetails;














