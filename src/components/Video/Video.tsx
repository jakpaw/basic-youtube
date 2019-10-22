import React from 'react';
import { useTypedSelector } from 'store';
import './Video.scss';

const Video: React.FC = () => {
  const { selectedVideo } = useTypedSelector(
    (state) => state.selectVideo,
  );

  const content = selectedVideo
    ? (
      <React.Fragment>
        <iframe
          title="{selectedVideo.snippet.title}"
          src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}?autoplay=1`}
        />
        <h1>{selectedVideo.snippet.title}</h1>
        <p>{selectedVideo.snippet.description}</p>
      </React.Fragment>
    )
    : <div>Please select a video from search results</div>;

  return (
    <section className="Video">
      {content}
    </section>
  );

};

export default Video;
