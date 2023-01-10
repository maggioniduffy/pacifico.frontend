import Image from "next/image";
import { useState } from "react";
import down from "../../public/assets/down-curved.png";
import "animate.css";

const sociosFundadores = [
  "Francisco Mantelli (Presidente)",
  "Roberto Romero",
  "Antonio Carro",
  "Enrique Carro (h)",
  "Julio Iriberry",
  "Félix Iriberry",
  "Lucio Palavecino",
  "Ramón Domínguez",
  "Juan Nordeström",
  "Celestino Dell Anna",
  "Gregorio Gómez",
  "Sixto Gestoso",
  "Marcelino Huenul",
  "Julio Carlos Giménez",
  "Alberto S. Ascheri",
];

interface TimelineProps {
  date: string;
  text: JSX.Element;
  i?: number;
}

const timeline: TimelineProps[] = [
  {
    date: "16 de Septiembre de 1916",
    text: (
      <>
        <p>
          El Club Atlético Pacífico se fundó el 16 de septiembre de 1916, justo
          en el momento en que la joven e incipiente población neuquina
          reclamaba por una institución que diera cabida a las ansias deportivas
          y sociales de la época. Cuenta la historia que los colores que
          identifican a la institución representan a los empleados del{" "}
          <b className="text-yellow">Correo</b> y a los <b> ferroviarios </b>.
          Incluso el nombre elegido hacía referencia al histórico Proyecto
          Nacional de Construcción del Ferrocarril al Pacífico. Reconocido como
          el Decano de la ciudad, nuestro club ha acompañando en forma
          permanente el desarrollo de la capital provincial con su constante
          actividad deportiva, social y cultural.
        </p>
      </>
    ),
  },
  {
    date: "Temporada 2011/2012",
    text: (
      <p>
        El club participa del primer Torneo Federal de la CABB{" "}
        <b> (3er categoria nacional)</b>
      </p>
    ),
  },
  {
    date: "29 de Octubre de 2022",
    text: (
      <>
        {" "}
        <p>
          Nuestras decanas hicieron historia debutando en la{" "}
          <b> Liga Nacional Femenina</b>, siendo el primer equipo de la region
          en conseguirlo.
        </p>
        <p> Fue derrota ante las tricampeonas de Berazategui.</p>
      </>
    ),
  },
];
const TimelineItem = ({ date, text, i }: TimelineProps) => {
  const flexOrder = i! % 2 == 0 ? "" : "flex-row-reverse";
  const fade = i! % 2 == 0 ? "fade-left" : "fade-right";
  return (
    <div className="flex place-items-center justify-center flex-col">
      <div className={"flex place-items-center flex-col md:" + flexOrder}>
        <div className="timelineitem shadow-xl h-32 w-32 bg-black m-8 flex flex-col justify-center p-8">
          <h3 className="m-auto text-left text-yellow font-bold">{date}</h3>
        </div>
        <div className="m-8 shadow-xl bg-white bg-opacity-50 rounded-xl p-4 h-fit text-sm">
          {text}
        </div>
      </div>
      <div className="h-12 m-auto rotate-8 w-12 relative">
        <Image src={down} alt={"Continue"} layout="fill" />
      </div>
    </div>
  );
};

const Historia = () => {
  const [hide, setHide] = useState(true);
  const [inf, setInf] = useState("animate__infinite");
  const open = () => {
    console.log(inf);
    setInf("");
    setHide(false);
  };
  const close = () => {
    setHide(true);
  };
  if (hide) {
    return (
      <div className={`mt-8 animate__animated animate__bounce ${inf}`}>
        <button
          onClick={open}
          className="rounded-xl text-black header-font font-bold text-left text-xl md:text-3xl"
        >
          {" "}
          Nuestra Historia{" "}
        </button>
      </div>
    );
  }
  return (
    <div className="mt-8">
      <button
        className="text-black header-font font-bold text-left text-xl md:text-3xl"
        onClick={close}
      >
        {" "}
        Nuestra Historia{" "}
      </button>
      <article className="paragraph-font w-full py-2 rounded flex flex-col justify-between">
        <h5 className="font-bold mb-4 text-sm md:text-xl text-gray">
          {" "}
          Socios Fundadores{" "}
        </h5>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:font-bold justify-between">
          {sociosFundadores.map((socio) => (
            <div
              key={socio}
              className="shadow w-full m-auto h-16 shadow-yellow rounded-xl flex place-items-center px-2 overflow-auto"
            >
              {" "}
              <h3 className="w-full text-center text-xs md:text-sm">
                {socio}{" "}
              </h3>{" "}
            </div>
          ))}
        </div>
      </article>
      <article className="history-article py-8 paragraph-font rounded w-full">
        <h5 className="font-bold mb-4 text-xl text-gray"> Cronologia </h5>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="flex flex-col w-full space-x-4 justify-between"
        >
          {timeline.map((tl, i) => (
            <TimelineItem
              date={tl.date}
              text={tl.text}
              key={tl.date + Date.now()}
              i={i}
            />
          ))}
        </div>
      </article>
    </div>
  );
};

export default Historia;
