const VideoGrid = ({ videos, onVideoSelect }) => {
  return (
    <div className="video-grid">
      {videos.map((video) => (
        <div
          key={video.id}
          className="video-card"
          onClick={() => onVideoSelect(video)}
        >
          <img src={video.thumbnail} alt={video.title} />
          <div className="video-info">
            <h3>{video.title}</h3>
            <p>{video.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;