import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../hooks";
import { deleteVideo } from "../../utils/api";
import { BASE_API_URL } from "../../utils/constants";

interface YoutubeElem {
  src: string;
  text: string;
  _id: string;
  canDelete?: boolean;
}

interface CardProps {
  src: string;
  text: string;
  id: string;
  canDelete?: boolean;
  delVideo: (id: string) => void;
}

const PlaylistCard = ({ id, src, text, canDelete, delVideo }: CardProps) => (
  <div className="h-fit m-2 shadow-xl rounded-b-xl w-fit border-b-2 border-yellow">
    <iframe
      src={src}
      title="YouTube video player"
      frameBorder="2"
      height="200"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="rounded-t-xl"
    ></iframe>
    <div className="h-12 flex w-full rounded-b-xl justify-center border-yellow border-r-2 border-l-2 place-items-center">
      <h5 className="text-gray text-sm md:text-lg">{text}</h5>
    </div>
    {canDelete && <button onClick={() => delVideo(id)}> Borrar </button>}
  </div>
);

interface Props {
  id?: string;
  canDelete?: boolean;
}

const Videos = ({ id, canDelete }: Props) => {
  const [youtube, setYoutubeData] = useState<YoutubeElem[]>([]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(10);
  const currentUser = useCurrentUser();

  const delVideo = (id: string) => deleteVideo(id, currentUser?.token);

  useEffect(() => {
    const setYoutubeElems = async () => {
      try {
        const res = await fetch(
          BASE_API_URL + "youtube/?skip=" + from + "&limit=" + to
        );
        const data = await res.json();
        setYoutubeData(data);
      } catch (error) {
        console.error(error);
      }
    };
    setYoutubeElems();
  }, [from, to, delVideo]);

  return (
    <div id={id} className="mt-8 w-11/12 m-auto rounded justify-start">
      <div className="flex place-items-center overflow-x-auto space-x-4 pt-2 w-full">
        {youtube.map(({ src, text, _id }) => (
          <PlaylistCard
            key={src}
            src={src}
            text={text}
            id={_id}
            canDelete={canDelete}
            delVideo={delVideo}
          />
        ))}
      </div>
    </div>
  );
};

export default Videos;
