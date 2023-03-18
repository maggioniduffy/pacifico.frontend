import { useRouter } from "next/router";
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
  <div className="h-fit shadow-xl rounded-b-xl w-fit border-b-2 border-yellow ">
    <iframe
      src={src}
      title="YouTube video player"
      frameBorder="2"
      height="250"
      width={"400"}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="rounded-t-xl"
    ></iframe>
    <div
      className="h-12 flex w-full rounded-b-xl justify-center 
      border-yellow border-r-2 border-l-2 overflow-hidden p-2"
    >
      <p className="text-gray font-bold text-sm md:text-lg text-ellipsis overflow-hidden">
        {text}
      </p>
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

  const delVideo = (id: string) => {
    deleteVideo(id, currentUser?.token);
    setYoutubeElems();
  };

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
  useEffect(() => {
    setYoutubeElems();
  }, [from, to]);

  return (
    <div
      id={id}
      className="mt-8 w-11/12 m-auto rounded justify-center place-items-center"
    >
      <div className="max-w-fit flex place-items-center justify-start overflow-x-auto space-x-4 pt-2 py-2 m-auto">
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
