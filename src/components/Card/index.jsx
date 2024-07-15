import "./Card.css";
import { useContext, useState } from "react";
import { AppContext } from "../../context/GlobalContext";
import { FaEdit as Edit } from "react-icons/fa";
import { RiDeleteBin2Fill as Delete } from "react-icons/ri";
import styled from "styled-components";

// Define los componentes estilizados fuera del componente React
const CardButton = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  color: ${(props) => props.$textColor};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: ${(props) => props.$hoverTextColor};
  }
`;

const VideoContainer = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  border-radius: 15px 15px 0px 0px;
  background: black;
`;

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const Icon = styled.div`
  margin-right: 8px;
`;

const Card = ({ datos, color }) => {
  const { setIsModalOpen, eliminarVideo, setVideoActual } = useContext(AppContext);
  const { id, titulo, categoria, imagen, video, descripcion } = datos;
  const [showVideo, setShowVideo] = useState(false);

  const handleEditClick = () => {
    setVideoActual(datos);
    setIsModalOpen(true);
  };

  const handleImageClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="container_card">
      {showVideo ? (
        <VideoContainer >
          <VideoIframe
            src={video}
            title={`Video de ${titulo}`}
            allowFullScreen
          />
        </VideoContainer>
      ) : (
        <img
          src={imagen}
          className="card_img"
          style={{ border: `3px solid ${color}`, borderBottom: "none" }}
          alt={`Imagen de ${titulo}`}
          onClick={handleImageClick}
        />
      )}
      <section
        className="card_options"
        style={{
          border: `3px solid ${color}`,
          boxShadow: `inset 0px 0px 9px 0px ${color}`,
        }}
      >
        <CardButton
          $textColor="white"
          $hoverTextColor={color}
          onClick={() => eliminarVideo(id)}
        >
          <Icon>
            <Delete size={30} alt="icono_eliminar" />
          </Icon>
          <a>BORRAR</a>
        </CardButton>
        <CardButton
          $textColor="white"
          $hoverTextColor={color}
          onClick={handleEditClick}
        >
          <Icon>
            <Edit size={30} alt="icono_editar" />
          </Icon>
          <a>EDITAR</a>
        </CardButton>
      </section>
    </div>
  );
};

export default Card;
