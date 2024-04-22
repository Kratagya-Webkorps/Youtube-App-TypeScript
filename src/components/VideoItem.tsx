import React from "react";
import '../style/video.css';

interface Video {
    id: {  kind: string,videoId: string };
    snippet: { title: string; thumbnails: { medium: { url: string } }; channelTitle: string; description: string };
  }
  
  interface Props {
    video: Video ;
    handleVideoSelect: (video: Video) => void;
    handleRemove: (videoId: string) => void;
  }
  
  const VideoItem: React.FC<Props> = ({ video, handleVideoSelect, handleRemove }) => {
    return (
        <div className="col-md-8 col-lg-4 card-wrap">
                <div style={{ height: "100px",width:"200px" }}>
                    <div className="card border-0 transform-on-hover" style={{ height: "100px",width:"200px" }}>
                        <img
                            src={video.snippet.thumbnails.medium.url}
                            alt={video.snippet.description}
                            className="card-img-top"
                            onClick={() => handleVideoSelect(video)}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{video.snippet.title}</h5>
                            <p className="card-text">
                                {video.snippet.channelTitle}
                            </p>
                        </div>
                        <button className="removeButton" onClick={() => handleRemove(video.id.videoId)} ><h4><i className="bi bi-trash"></i></h4></button>
                    </div>
                </div>
            </div>
    )
}
export default VideoItem;