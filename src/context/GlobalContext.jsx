import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [openButton, setOpenButton] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoActual, setVideoActual] = useState(null);

  const [videos, actualizarVideos] = useState([]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Accion",
      color: "#6BD1FF",
    },
    {
      id: uuid(),
      titulo: "Drama",
      color: "#00C86F",
    },
    {
      id: uuid(),
      titulo: "Comedia",
      color: "#FFBA05",
    },
    {
      id: uuid(),
      titulo: "Animacion",
      color: "#ff8605",
    },
  ]);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/videos");
        // console.log(response);
        actualizarVideos(response.data);
      } catch (error) {
        console.error("Error al obtener los videos:", error);
      }
    };

    fetchVideos();
  }, []);
  const registrarVideo = async (datos) => {
    try {
      const response = await axios.post("http://localhost:3000/videos", datos);
      const nuevoVideo = response.data;
      actualizarVideos((videosPrevios) => [...videosPrevios, nuevoVideo]);
    } catch (error) {
      console.error("Error al registrar el colaborador:", error);
    }
  };
  //Eliminar colaborador
  const eliminarVideo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/videos/${id}`);
      const nuevosVideos = videos.filter((video) => video.id !== id);
      actualizarVideos(nuevosVideos);
    } catch (error) {
      console.error("Error al eliminar el video:", error);
    }
  };
  const actualizarVideo = async (datos) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/videos/${datos.id}`,
        datos
      );
      const videoActualizado = response.data;
      actualizarVideos((videosPrevios) =>
        videosPrevios.map((video) =>
          video.id === videoActualizado.id ? videoActualizado : video
        )
      );
    } catch (error) {
      console.error("Error al actualizar el video:", error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        videos,
        actualizarVideos,
        equipos,
        actualizarEquipos,
        isModalOpen,
        setIsModalOpen,
        registrarVideo,
        eliminarVideo,
        actualizarVideo,
        videoActual,
        setVideoActual,
        openButton,
        setOpenButton,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
