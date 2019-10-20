import React from 'react';
import { useTypedSelector } from 'store';
import './Video.scss';

const Video: React.FC = () => {
  const { selectedVideo } = useTypedSelector(
    (state) => state.selectVideo,
  );

  if (selectedVideo) {
    return (
      <div>
        <iframe
          title="Video"
          src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}?autoplay=1`}
        />
        <div>{selectedVideo.snippet.title}</div>
        <div>{selectedVideo.snippet.description}</div>
      </div>
    );
  } else {
    return <div>Please select a video from search results</div>;
  }

};

export default Video;
