import { useState, useEffect } from "react";

function getWindowDimensions(window: any) {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

interface Dimensions {
  width: Number;
  height: Number;
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<Dimensions>({
    width: 1000,
    height: 600,
  });

  useEffect(() => {
    setWindowDimensions(getWindowDimensions(window));
    function handleResize() {
      setWindowDimensions(getWindowDimensions(window));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
