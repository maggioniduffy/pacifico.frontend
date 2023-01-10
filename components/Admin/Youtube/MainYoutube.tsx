import paso1 from "../../../public/assets/paso1.jpeg";
import paso2 from "../../../public/assets/paso2.jpeg";
import paso3 from "../../../public/assets/paso3.jpeg";
import Image from "next/image";
import AddVideo from "./AddVideo";

const MainYoutube = () => {
  return (
    <div className="flex flex-col place-items-center">
      {" "}
      <h2 className="font-bold text-3xl"> Videos </h2>{" "}
      <h4 className="text-xl">
        {" "}
        Como insertar un video de youtube paso a paso
      </h4>
      <p> Para hacerlo necesitamos la url de EMBED, asi se consigue: </p>
      <div className="flex flex-col space-y-5 flex-wrap h-screemn">
        <div className="w-full h-96">
          <p> Hacer click en Compartir </p>
          <Image src={paso1} width={650} height={300} />
        </div>
        <div className="w-full h-96">
          <p> Hacer click en Incorporar </p>
          <Image src={paso2} width={650} height={300} />
        </div>
        <div className="w-full h-96">
          <p> Copiar la url subrayada en azul </p>
          <Image src={paso3} width={650} height={300} />
        </div>
      </div>
      <AddVideo />
    </div>
  );
};

export default MainYoutube;
