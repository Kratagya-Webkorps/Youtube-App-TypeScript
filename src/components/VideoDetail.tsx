import React from "react";

interface Video{
  snippet: { title: string; channelTitle: string; thumbnails: { medium: { url: string } } };

}

interface Props {
  video: Video;
  onClose: () => void;
  duration: string;
  viewCount: string;
  
}

const VideoDetail: React.FC<Props> = ({ video, onClose, duration, viewCount }) => {
  if (!video) {
    return null;
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <button className="close-btn" onClick={onClose}>Close</button>
      <img className="ui image card-img-top" src={video.snippet.thumbnails.medium.url} alt="" />
      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
        <p className="card-text">Duration : { duration}</p>
        <p className="card-text">View Count : {viewCount}</p>
        <p className="card-text">Channel Name : {video.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
