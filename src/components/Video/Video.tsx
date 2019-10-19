import React from 'react';
import { VideoProperties } from 'youtube-api';
import './Video.scss';

interface VideoProps {
  videoProperties?: VideoProperties;
}

const Video: React.FC<VideoProps> = (props) => {
  const { videoProperties } = props;
  // TODO maybe extract this if to a separate component
  if (videoProperties) {
    return (
      <div>
        <iframe
          title="Video"
          src={`https://www.youtube.com/embed/${videoProperties.id.videoId}?autoplay=1`}
        />
        <div>{videoProperties.snippet.title}</div>
        <div>{videoProperties.snippet.description}</div>
      </div>
    );
  } else {
    return <div>Please select a video from search results</div>;
  }

};

export default Video;
