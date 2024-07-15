// Navbar.js
import "./Navbar.css";
import Button from "../Button";
import { FaHome } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import ButtonWithIcon from "../ButtonIcon";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isDesktop = useMediaQuery({ minWidth: 650 });

  return (
    <>
      <nav className="container-nav">
        {isDesktop ? (
          <>
            <img src="/img/logo.png" className="logo-nav" alt="Logo" />
            <div className="container-boton">
              <Button tipo="button" texto="Home" route="/" />
              <Button tipo="button" texto="Nueva Pelicula" route="/form" />
            </div>
          </>
        ) : (
          <div className="container-boton">
            <ButtonWithIcon
              icon={<FaHome />}
              text="HOME"
              route="/"
              name="home"
            />
            <ButtonWithIcon
              icon={<CiCirclePlus />}
              text="NUEVA PELICULA"
              route="/form"
              name="newVideo"
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
