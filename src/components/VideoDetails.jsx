import { useState } from 'react';

const VideoDetails = ({ video, onBack }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="video-details">
      <button onClick={onBack}>Back</button>
      <video controls src={video.url}></video>
      <h2>{video.title}</h2>
      <p>{video.description}</p>
      <button onClick={() => setLiked(!liked)}>{liked ? 'Unlike' : 'Like'}</button>
    </div>
  );
};

export default VideoDetails;