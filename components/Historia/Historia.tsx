import escudo from "../../public/assets/PacificoEscudo.png";
import Image from "next/image";

const Historia = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      className="bg-opacity-100 p-4 mt-16 bg-realwhite rounded-xl shadow"
    >
      <h3 className="text-black header-font font-bold text-center text-4xl p-4">
        {" "}
        Nuestra Historia{" "}
      </h3>
      <article className="history-article p-4 paragraph-font rounded px-20 w-full">
        <h5 className="font-bold mb-4 text-3xl text-gold-500">
          {" "}
          Acto Fundacional{" "}
        </h5>
        <p className="font-bold mb-1"> 16 de Septiembre de 1916</p>
        <p>
          {" "}
          En las primeras décadas del siglo XX comenzaron a surgir en el
          Territorio Nacional de Neuquén, diversas entidades deportivas que
          fueron impulsadas principalmente por la práctica del fútbol. El
          Neuquén Atlético Club inició sus actividades con un partido de fútbol
          jugado el 18 de marzo de 1909. Más adelante, un grupo decidido de
          deportistas hizo los primeros intentos de fundación en 1913, que con
          el correr del tiempo habrían de convertirse en una realidad, cuando el
          16 de septiembre de 1916 se constituye la primera Comisión Directiva
          del <b>Club Atlético Pacífico</b>, encabezada por su presidente
          Francisco Mantelli y otros socios fundadores ocupando los diferentes
          cargos. Según las fuentes históricas, los colores que identificaron a
          la institución tuvieron origen en el amarillo por los empleados del
          Correo y el negro por los empleados del Ferrocarril. El nombre hacía
          referencia al histórico proyecto nacional de{" "}
          <b>construcción del ferrocarril al Pacífico.</b>
        </p>
      </article>
      <article className="paragraph-font p-4 w-full px-20 rounded flex flex-col justify-between">
        <h5 className="font-bold mb-4 text-3xl text-gold-500">
          {" "}
          Socios Fundadores{" "}
        </h5>
        <ul className="font-bold">
          <li> Francisco Mantelli (Presidente) </li>
          <li> Roberto Romero</li>
          <li>Enrique Carro (h)</li> <li>Antonio Carro</li>
          <li> Julio Iriberry </li> <li>Félix Iriberry</li>{" "}
          <li> Lucio Palavecino</li>
          <li> Ramón Domínguez </li> <li> Juan Nordeström </li>
          <li> Celestino Dell Anna </li> <li> Gregorio Gómez </li>
          <li> Sixto Gestoso </li>
          <li> Marcelino Huenul </li> <li> Julio Giménez </li>
          <li> Alberto S. Ascheri</li> <li> Juan Carlos Giménez</li>
        </ul>
      </article>
    </div>
  );
};

export default Historia;
