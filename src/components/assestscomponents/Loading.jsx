import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assests/loading.json";

const Loading = ({
  width = 100,
  height = 100,
  isPaused = false,
  isStopped = false,
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie
      options={defaultOptions}
      height={height}
      width={width}
      isPaused={isPaused}
      isStopped={isStopped}
    />
  )
};

export default Loading;