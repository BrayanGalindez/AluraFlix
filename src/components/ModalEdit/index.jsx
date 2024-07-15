import "./ModalEdit.css"; // Asegúrate de tener estilos para el modal
import Button from "../Button";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/GlobalContext";

const Modal = () => {
  const { equipos, isModalOpen, setIsModalOpen, actualizarVideo, videoActual } =
    useContext(AppContext);
  const [localFormData, setLocalFormData] = useState({
    titulo: "",
    categoria: "",
    imagen: "",
    video: "",
    descripcion: "",
  });

  // Establecer localFormData cuando videoActual cambie
  useEffect(() => {
    if (videoActual) {
      setLocalFormData(videoActual);
    }
  }, [videoActual]);

  // Cerrar el modal sin guardar cambios
  const handleClose = () => {
    setIsModalOpen(false);
    // Restaurar el estado local si no se enviaron cambios
    setLocalFormData(
      videoActual || {
        titulo: "",
        categoria: "",
        imagen: "",
        video: "",
        descripcion: "",
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({
      ...localFormData,
      [name]: value,
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    // Crear un objeto con solo los campos que tienen datos
    const datosAEnviar = Object.keys(localFormData).reduce((acc, key) => {
      if (localFormData[key] !== "") acc[key] = localFormData[key];
      return acc;
    }, {});

    // Verifica si el videoActual tiene un id antes de llamar a actualizarVideo
    if (videoActual?.id) {
      actualizarVideo({ ...datosAEnviar, id: videoActual.id });
    }
    setIsModalOpen(false);
  };

  const manejarReset = () => {
    setLocalFormData({
      titulo: "",
      categoria: "",
      imagen: "",
      video: "",
      descripcion: "",
    });
  };

  if (!isModalOpen) return null; // Si el modal no está abierto, no renderizar nada

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          className="modal-close"
          onClick={handleClose}
          aria-label="Close modal"
        >
          <img src="/img/cancel.svg" />
        </button>
        <form
          onSubmit={manejarEnvio}
          onReset={manejarReset}
          className="form-modal"
        >
          <h1 className="form-modal-title">Editar card:</h1>
          <div className="modal-input">
            <label>Titulo</label>
            <input
              className="input"
              type="text"
              placeholder="ingrese el título"
              name="titulo"
              value={localFormData.titulo}
              onChange={handleChange}
            ></input>
          </div>
          <div className="modal-input">
            <label>Categoria</label>
            <select
              className="container-select"
              name="categoria"
              value={localFormData.categoria}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                seleccione una categoría
              </option>
              {equipos.map((equipo) => (
                <option key={equipo.id} value={equipo.titulo}>
                  {equipo.titulo}
                </option>
              ))}
            </select>
          </div>
          <div className="modal-input">
            <label>Imagen</label>
            <input
              className="input"
              type="text"
              placeholder="el enlace es obligatorio"
              name="imagen"
              value={localFormData.imagen}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="modal-input">
            <label>Video</label>
            <input
              className="input"
              type="text"
              placeholder="ingrese el enlace del video"
              name="video"
              value={localFormData.video}
              onChange={handleChange}
            ></input>
          </div>
          <div className="modal-input">
            <label>Descripcion</label>
            <textarea
              className="input-textarea"
              placeholder="¿De qué se trata este vídeo?"
              name="descripcion"
              value={localFormData.descripcion}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="modal-buttons">
            <Button tipo="submit" texto="Guardar" />
            <Button tipo="reset" texto="Limpiar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
