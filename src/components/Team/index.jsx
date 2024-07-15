import "./Team.css";
import Card from "../Card";
import Title from "../Title";
import { useContext } from "react";
import { AppContext } from "../../context/GlobalContext";

const Team = ({ datos, videos }) => {
  const { setIsModalOpen } =  useContext(AppContext);
  const { color, titulo } = datos;

  // Verifica si hay al menos un video antes de renderizar el equipo
  if (videos.length === 0) {
    return null; // No renderiza nada si no hay videos
  }

  return (
    <div className="container-team">
      <Title text={titulo} color={color} />
      <div className="container_cards">
        {videos.map((video, index) => (
          <Card
            color={color}
            datos={video}
            key={index}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
