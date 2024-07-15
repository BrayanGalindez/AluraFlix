import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../../context/GlobalContext";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 10px;
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 50px;
  font-family: "Source Sans 3";
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  cursor: pointer;
  transition: width 0.3s, padding 0.3s, background-color 0.3s, border 0.3s;
  width: ${(props) => (props.$isOpen ? "155px" : "50px")};
  background-color: ${(props) => (props.$isOpen ? "#2271D13D" : "transparent")};
  border: ${(props) => (props.$isOpen ? "2px solid #2271D1" : "none")};

  &:hover {
    border-color: ${(props) => (props.$isOpen ? "#00f" : "none")};
  }
`;

const Icon = styled.div`
  margin-right: ${(props) => (props.$isOpen ? "10px" : "0px")};
  transition: margin-right 0.3s;
  font-size: 45px;
`;

const ButtonWithIcon = ({ icon, text, route, name }) => {
  const { openButton, setOpenButton } = useContext(AppContext);
  const navigate = useNavigate();

  const isOpen = openButton === name;

  const handleClick = () => {
    setOpenButton(isOpen ? null : name);
    if (!isOpen) {
      navigate(route);
    }
  };

  return (
    <ButtonContainer>
      <IconButton $isOpen={isOpen} onClick={handleClick}>
        <Icon $isOpen={isOpen}>{icon}</Icon>
        {isOpen && <span>{text}</span>}
      </IconButton>
    </ButtonContainer>
  );
};

export default ButtonWithIcon;
