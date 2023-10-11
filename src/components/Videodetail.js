import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";

const Videodetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    console.log(setVideoDetail);

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);
  return (
    <div className="bg-black pt-[80px] w-full">
      <div className="flex justify-center">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className="react-player"
          width="95%"
          height="650px"
          controls
        />
      </div>
      <div className="flex justify-center text-white text-5xl mt-5 font-extrabold ">
        Related <span className="ml-4 text-red-700">videos</span>
      </div> 
      <div className=" w-[82%] mx-auto pb-5"><Videos videos={videos} /></div>
    </div>
  );
};

export default Videodetail;
