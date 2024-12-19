import { useState, useEffect } from "react";
import VideoGrid from "./components/VideoGrid";
import VideoDetails from "./components/VideoDetails";
import "./index.css";

const App = () => {
  const [videos, setVideos] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetch("/mock-videos.json")
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      {selectedVideo ? (
        <VideoDetails
          video={selectedVideo}
          onBack={() => setSelectedVideo(null)}
        />
      ) : (
        <>
          <header className="app-header">
            <input
              type="text"
              placeholder="Search by title or genre..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </header>

          {filteredVideos.length > 0 ? (
            <VideoGrid
              videos={filteredVideos}
              onVideoSelect={setSelectedVideo}
            />
          ) : (
            <div className="no-results">
              <h2>No results found!</h2>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;