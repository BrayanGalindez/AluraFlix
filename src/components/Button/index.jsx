import "./Button.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Button = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.route) {
      navigate(props.route);
    } else if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button onClick={handleClick} type={props.tipo} className="boton-nav">
      {props.texto}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  route: PropTypes.string ,
  texto: PropTypes.string ,
  tipo: PropTypes.string ,
};

export default Button;
