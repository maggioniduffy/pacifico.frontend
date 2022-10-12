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
const Historia = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="mt-16">
      <h3 className="text-black header-font font-bold text-left text-5xl">
        {" "}
        Nuestra Historia{" "}
      </h3>
      <article className="paragraph-font w-full py-8  pr-20 rounded flex flex-col justify-between">
        <h5 className="font-bold mb-4 text-3xl text-gold-500">
          {" "}
          Socios Fundadores{" "}
        </h5>
        <div className="flex flex-wrap font-bold">
          {sociosFundadores.map((socio) => (
            <div key={socio}>
              {" "}
              <h3
                data-aos="fade-up"
                className="my-8 mr-4 text-left w-24"
                data-aos-duration="2000"
              >
                {"- "}
                {socio}{" "}
              </h3>{" "}
            </div>
          ))}
        </div>
      </article>
      <article className="history-article py-8 paragraph-font rounded pr-20 w-full">
        <h5 className="font-bold mb-4 text-3xl text-gold-500"> Cronologia </h5>
        <div className="flex justify-between">
          <div className="timelineitem shadow-xl h-56 w-56 bg-gold-300 m-8 flex flex-col justify-center p-8">
            <h3 className="font-bold m-auto text-center text-xl ">
              {" "}
              16 de Septiembre de 1916{" "}
            </h3>
          </div>

          <div className="m-8 shadow-xl bg-white bg-opacity-50 rounded-xl p-4 h-fit text-xl">
            <p>
              {" "}
              Un grupo decidido de deportistas hizo los primeros intentos de
              fundación en 1913, que con el correr del tiempo habrían de
              convertirse en una realidad, cuando el 16 de septiembre de 1916 se
              constituye la primera Comisión Directiva del{" "}
              <b>Club Atlético Pacífico</b>, encabezada por su presidente
              Francisco Mantelli y otros socios fundadores ocupando los
              diferentes cargos.
            </p>
            <p>
              Según las fuentes históricas, los colores que identificaron a la
              institución tuvieron origen en el{" "}
              <b className="text-yellow">amarillo</b> por los empleados del
              Correo y el <b> negro </b> por los empleados del Ferrocarril. El
              nombre hacía referencia al histórico proyecto nacional de{" "}
              <b>construcción del ferrocarril al Pacífico.</b>
            </p>
          </div>
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
