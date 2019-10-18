import React from 'react';
import './Video.scss';

interface VideoProps {
  videoId?: string;
}

const Video: React.FC<VideoProps> = (props) => {
  if (props.videoId) {
    return (
      <iframe
        title="Video"
        src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1`}
      />
    );
  } else {
    return <div>Please select a video from search results</div>;
  }

};

export default Video;
