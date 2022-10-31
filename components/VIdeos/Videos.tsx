import React, { useEffect, useState } from "react";
import { BASE_API_URL } from "../../utils/constants";

interface YoutubeElem {
  src: string;
  text: string;
}

const PlaylistCard = ({ src, text }: YoutubeElem) => (
  <div className="h-fit rounded-b-xl w-fit border-b-2 border-yellow">
    <iframe
      width="560"
      height="315"
      src={src}
      title="YouTube video player"
      frameBorder="2"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <div className="h-12 flex rounded-b-xl justify-center border-yellow border-r-2 border-l-2 place-items-center">
      <h5 className="text-gray text-lg">{text}</h5>
    </div>
  </div>
);

const Videos = () => {
  const [youtube, setYoutubeData] = useState<YoutubeElem[]>([]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(10);

  useEffect(() => {
    const setYoutubeElems = async () => {
      const res = await fetch(
        BASE_API_URL + "youtube/?skip=" + from + "&limit=" + to
      );
      const data = await res.json();
      setYoutubeData(data);
    };
    setYoutubeElems();
  }, [from, to]);

  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="mt-32">
      <h3 className="text-black header-font font-bold text-left text-3xl">
        {" "}
        Videos{" "}
      </h3>
      <div className="flex overflow-x-auto space-x-4 pt-2">
        {youtube.map(({ src, text }) => (
          <PlaylistCard key={src} src={src} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Videos;
