import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../assests/404error.json";
import responsive from "../responsiveassests/responsive";

const PageNotFound = ({ isPaused = false, isStopped = false }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let height;
      if (width <= 640) {
        height = responsive.mobile.height;
      } else if (width <= 1024) {
        height = responsive.tablet.height;
      } else {
        height = responsive.desktop.height;
      }
      setDimensions({ width, height });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
      <Lottie
        options={defaultOptions}
        height={dimensions.height}
        width={dimensions.width}
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </div>
  );
};

export default PageNotFound;
