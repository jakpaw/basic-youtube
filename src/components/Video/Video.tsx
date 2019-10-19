import React from 'react';
import { VideoProperties } from 'youtube-api';
import './Video.scss';

interface VideoProps {
  videoProperties?: VideoProperties;
}

const Video: React.FC<VideoProps> = (props) => {
  // TODO maybe extract this if to a separate component
  if (props.videoProperties) {
    return (
      <iframe
        title="Video"
        src={`https://www.youtube.com/embed/${props.videoProperties.id.videoId}?autoplay=1`}
      />
    );
  } else {
    return <div>Please select a video from search results</div>;
  }

};

export default Video;
