import "./Home.css";
import Banner from "../../components/Banner";
import Modal from "../../components/ModalEdit";
import Team from "../../components/Team";
import { useContext } from "react";
import { AppContext } from "../../context/GlobalContext";
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const { equipos, videos } = useContext(AppContext);
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1000px)' });

  return (
    <div className="container-home">
      {isLargeScreen && <Banner />}
      {equipos.map((equipo) => (
        <Team
          datos={equipo}
          key={equipo.id}
          videos={videos.filter((video) => video.categoria === equipo.titulo)}
        />
      ))}
      <Modal />
    </div>
  );
};

export default Home;
