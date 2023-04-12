import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
    return () => {};
  }, [dispatch]);

  return (
    <div>
      <iframe
        width="1000"
        height="506"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="My Software Engineering Journey and how you can become one too (as a Software Engineer at Meta)"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
