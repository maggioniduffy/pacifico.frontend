import React from "react";

interface Props {
  title: string;
  image: string;
  id: string;
}

const NewCard = ({ title, image, id }: Props) => {
  return (
    <div className="border-xl relative w-72">
      <div>
        <Image src={image} layout="responsive" height={9} width={16} />
      </div>
      <div className="absolute bottom-0 bg-white w-full h-16"></div>
    </div>
  );
};

export default NewCard;
