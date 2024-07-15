import "./Banner.css";

const Banner = () => {
  return (
    <div className="container-banner">
      <div className="card-banner">
        <div className="wrapper-text">
          <div className="card-banner-titulo-tipo">Sobre este proyecto:</div>
          <h1 className="card-banner-titulo">Challenge AluraFlix</h1>
          <p className="card-banner-parrafo">
            Este challenge fue desarrollado para mostrar todo lo aprendido en la
            formación de Alura. Consiste en el desarrollo de un sitio web que
            permite gestionar una galería de películas, donde se pueden agregar,
            eliminar y editar entradas. El proyecto tiene como objetivo aplicar
            los conocimientos adquiridos en el curso para construir una
            aplicación web funcional y con una interfaz atractiva.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
