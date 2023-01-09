import Image from "next/image";
import down from "../../public/assets/down-curved.png";

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
        <div className="timelineitem shadow-xl h-32 w-32 bg-gray m-8 flex flex-col justify-center p-8">
          <h3 className="m-auto text-left text-gold-300">{date}</h3>
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
  return (
    <div className="mt-8">
      <h3 className="text-black header-font font-bold text-left text-xl md:text-3xl">
        {" "}
        Nuestra Historia{" "}
      </h3>
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

// {" "}
//           En las primeras décadas del siglo XX comenzaron a surgir en el
//           Territorio Nacional de Neuquén, diversas entidades deportivas que
//           fueron impulsadas principalmente por la práctica del fútbol. El
//           Neuquén Atlético Club inició sus actividades con un partido de fútbol
//           jugado el 18 de marzo de 1909. Más adelante, un grupo decidido de
//           deportistas hizo los primeros intentos de fundación en 1913, que con
//           el correr del tiempo habrían de convertirse en una realidad, cuando el
//           16 de septiembre de 1916 se constituye la primera Comisión Directiva
//           del <b>Club Atlético Pacífico</b>, encabezada por su presidente
//           Francisco Mantelli y otros socios fundadores ocupando los diferentes
//           cargos. Según las fuentes históricas, los colores que identificaron a
//           la institución tuvieron origen en el amarillo por los empleados del
//           Correo y el negro por los empleados del Ferrocarril. El nombre hacía
//           referencia al histórico proyecto nacional de{" "}
//           <b>construcción del ferrocarril al Pacífico.</b>
