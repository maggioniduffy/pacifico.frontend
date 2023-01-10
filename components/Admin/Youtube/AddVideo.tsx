import React, { useState } from "react";

const AddVideo = () => {
  const [src, setSrc] = useState("");
  const [title, setTitle] = useState("");
  return (
    <div>
      <p> Agregar video: </p>
      <form className="flex flex-col">
        <input
          placeholder="url"
          value={src}
          onChange={(e) => setSrc(e.target.value)}
        />
        <input
          placeholder="titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
};

export default AddVideo;
