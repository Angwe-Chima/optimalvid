import { useState } from "react";

const VideoDetails = ({ video, onBack }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="video-details">
      <div className="back-btn">
        <button onClick={onBack}>Back</button>
      </div>
      <video controls src={video.url}></video>
      <div className="video-desc">
        <div>
          <h2>{video.title}</h2>
          <button
            onClick={() => setLiked(!liked)}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            {liked ? (
              <img
                src="https://img.icons8.com/ios-filled/50/ff0000/thumbs-down.png" // Image for Unlike
                alt="Unlike"
                width={20}
                height={20}
              />
            ) : (
              <img
                src="https://img.icons8.com/ios-filled/50/4caf50/thumb-up.png" // New Image for Like
                alt="Like"
                width={20}
                height={20}
              />
            )}
            {liked ? "Unlike" : "Like"}
          </button>
        </div>
        <div>
          <p>{video.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
