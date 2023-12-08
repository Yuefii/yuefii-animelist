"use client";
import { useState } from "react";
import YouTube from "react-youtube";

interface VideoPlayerProps {
  youtubeId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ youtubeId }) => {
  const option = {
    width: "350",
    height: "300",
  };

  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  const handleWatchTrailerClick = () => {
    setShowVideoPlayer(true);
  };

  const handleCloseClick = () => {
    setShowVideoPlayer(false);
  };
  return (
    <>
      <div className="py-2">
        <button
          onClick={handleWatchTrailerClick}
          className="bg-red-700 py-2 px-14 text-center rounded-md font-semibold text-white hover:text-white transition-all hover:bg-black"
        >
          Watch Trailer
        </button>
      </div>
      <div>
        {showVideoPlayer && (
          <div className="fixed top-10 right-2">
            <div>
              <button
                className="bg-red-600 font-bold text-white px-3 py-2 rounded-t-md float-right"
                onClick={handleCloseClick}
              >
                X
              </button>
            </div>
            <YouTube
              videoId={youtubeId}
              onReady={(event) => event.target.pauseVideo()}
              opts={option}
            />
          </div>
        )}
      </div>
    </>
  );
};
export default VideoPlayer;
