import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
    return () => {};
  }, []);

  const getVideos = async () => {
    const api_key = process.env.REACT_APP_YOUTUBE_API_KEY;
    console.log("apikey", api_key);
    const data = await fetch(YOUTUBE_VIDEO_API + api_key);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap justify-evenly">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard info={video} key={video.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
