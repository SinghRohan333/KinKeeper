import React, { useContext } from "react";
import TimelineHas from "./TimelineHas";
import NotTimeline from "./NotTimeline";
import { Context } from "../context/context";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";

const Timeline = () => {
  const { interactionCnt, setInteractionCnt } = useContext(Context);

  return interactionCnt > 0 ? <TimelineHas /> : <NotTimeline />;
};

export default Timeline;
