import React, { useState } from "react";
import { useCurrentUser } from "../../../hooks";
import { addVideo } from "../../../utils/api";
import AddComponent from "../AddComponent";

interface InputProps {
  placeholder: string;
  value: any;
  setter: (value: any) => void;
}

const AddVideo = () => {
  const [src, setSrc] = useState("");
  const [title, setTitle] = useState("");
  const currentUser = useCurrentUser();
  const send = async (e: any) => {
    e.preventDefault();
    try {
      const res = await addVideo(src, title, currentUser?.token);
      if (!res.statusCode) {
        setSrc("");
        setTitle("");
      } else {
        alert("Error ingresando video");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const inputs: InputProps[] = [
    {
      placeholder: "url",
      value: src,
      setter: setSrc,
    },
    {
      placeholder: "title",
      value: title,
      setter: setTitle,
    },
  ];

  return (
    <div className="bg-white p-2 rounded-xl shadow m-2 mb-8">
      <p> Agregar video: </p>
      <AddComponent submit={send} inputs={inputs} />
    </div>
  );
};

export default AddVideo;
