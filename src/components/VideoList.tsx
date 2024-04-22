import React from "react";
import VideoItem from "./VideoItem";

interface Video {
  id: { kind: string; videoId: string };
  snippet: {
    title: string;
    thumbnails: { medium: { url: string } };
    channelTitle: string;
    description: string;
  };
}

interface Props {
  videos: Video[];
  handleVideoSelect: (video: Video) => void;
  handleRemove: (videoId: string) => void;
}

const VideoList: React.FC<Props> = ({ videos, handleVideoSelect, handleRemove }) => {
  const videoListObject: { ids: string[] } = { ids: [] };
  const renderedVideos = videos
    .filter((video): video is Video => video && video.id && video.id.videoId !== undefined)
    .map((video) => {
      if (video.id.kind === "youtube#channel") {
        return null;
      }
      videoListObject.ids.push(video.id.videoId);
      return (
        <VideoItem
          key={`${video.id.videoId}-${video.snippet.title}`}
          video={video}
          handleVideoSelect={handleVideoSelect}
          handleRemove={handleRemove}
        />
      );
    });
  return <section className="gallery-block cards-gallery"><div>{renderedVideos}</div></section>;
};

export default VideoList;
