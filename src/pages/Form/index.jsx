import "./Form.css";
import { useContext, useState } from "react";
import Button from "../../components/Button";
import { AppContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const router = useNavigate()
  const { equipos, registrarVideo } = useContext(AppContext);
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "", // Valor inicial debe ser "" para coincidir con el placeholder
    imagen: "",
    video: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    // console.log("Manejar el envio");
    let datosAEnviar = {
      titulo: formData.titulo,
      categoria: formData.categoria,
      imagen: formData.imagen,
      video: formData.video,
      descripcion: formData.descripcion,
    };
    // console.log(datosAEnviar);
    registrarVideo(datosAEnviar);
    router.push("/")

  };

  const manejarReset = () => {
    setFormData({
      titulo: "",
      categoria: "", // Restablecer al valor del placeholder
      imagen: "",
      video: "",
      descripcion: "",
    });
  };

  return (
    <>
      <div className="container-form">
        <div className="container-form-titles">
          <h1 className="container-title">Nuevo video</h1>
          <p className="container-p">
            Complete el formulario para crear una nueva tarjeta de video
          </p>
        </div>

        <form onSubmit={manejarEnvio} onReset={manejarReset} className="form">
          <h1 className="form-title">Crear Tarjeta</h1>
          <div className="container-form-input">
            <div className="container-input">
              <label>Titulo</label>
              <input
                className="input"
                type="text"
                placeholder="ingrese el título"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="container-form-input">
            <div className="container-input">
              <label>Categoria</label>
              <select
                className="container-select"
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>
                  Seleccione una categoría
                </option>
                {equipos.map((equipo) => (
                  <option key={equipo.id} value={equipo.titulo}>
                    {equipo.titulo}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="container-form-input">
            <div className="container-input">
              <label>Imagen</label>
              <input
                className="input"
                type="text"
                placeholder="el enlace es obligatorio"
                name="imagen"
                value={formData.imagen}
                onChange={handleChange}
                required
              />
            </div>
            <div className="container-input">
              <label>Video</label>
              <input
                className="input"
                type="text"
                placeholder="ingrese el enlace del video"
                name="video"
                value={formData.video}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="container-form-input">
            <div className="container-input">
              <label>Descripcion</label>
              <textarea
                className="input-textarea"
                placeholder="¿De qué se trata este vídeo?"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="container-buttons">
            <Button tipo="submit" texto="Guardar" />
            <Button tipo="reset" texto="Limpiar" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
