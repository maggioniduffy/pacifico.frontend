import React from "react";

interface PlaylistCardProps {
  src: string;
  text: string;
}

const PlaylistCard = ({ src, text }: PlaylistCardProps) => (
  <div className="h-fit rounded-b-xl overflow-hidden border-b-2 border-yellow">
    <iframe
      width="560"
      height="315"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <div className="h-12 flex rounded-b-xl justify-center border-yellow border-r-2 border-l-2 place-items-center">
      <h5 className="text-gray text-lg">{text}</h5>
    </div>
  </div>
);

const playlists = [
  {
    src: "https://www.youtube.com/embed/videoseries?list=PLRkIjXKovdlqofvjr4u6qQSg2Pr1qpcRw",
    text: "Torneo Provincial 2022 - Primera Femenina",
  },

  {
    src: "https://www.youtube.com/embed/videoseries?list=PLRkIjXKovdlrhFl4Nu6r8tuifynhJZcET",
    text: "Torneo Prefederal 2022 - Primera Masculina",
  },
];

// Pasar esto a la api asi puede ser editado

const Videos = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="mt-32">
      <h3 className="text-black header-font font-bold text-left text-3xl">
        {" "}
        Videos{" "}
      </h3>
      <div className="flex overflow-x-auto space-x-4 pt-2">
        {playlists.map(({ src, text }) => (
          <PlaylistCard key={src} src={src} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Videos;
