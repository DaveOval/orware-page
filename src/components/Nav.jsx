import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import { uicolors } from "../ui/color";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  color: white;
  position: fixed;
  width: 100%;
  max-width: 1200px;
  z-index: 100;
  img {
    width: 100px;
  }
`;

const ImageContainer = styled.div`
  background-color: ${uicolors.background};
  background-color: #FFFFFF;
  padding: 10px;
  border-radius: 8px;
  img {
    width: 150px;
  }
`;

const Hamburger = styled.button`
  background: none;
  border: none;
  background-color: ${uicolors.transparencia};
  border-radius: 8px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  img {
    width: 90%;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 110px;
  right: 0;
  background-color: ${uicolors.background};
  padding: 40px;
  border-radius: 8px;
  a {
    text-decoration: none;
    color: white;
    font-size: 20px;
  }
`;

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <NavContainer>
      <ImageContainer>
        <Link to="/">
          <picture>
            <img src={`${import.meta.env.BASE_URL}/logoorware.png`} alt="Logo orware" />
          </picture>
        </Link>
      </ImageContainer>

      <Hamburger onClick={toggleMenu}>
        <picture>
          <img src={`${import.meta.env.BASE_URL}./icons/burger.svg`} alt="Logo orware" />
        </picture>
      </Hamburger>

      {isOpen && (
        <LinkContainer >
          <Link to="/">Inicio</Link>
          <Link to="/sobre-nosotros">Sobre nosotros</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/contacto">Contacto</Link>
        </LinkContainer>
      )}
    </NavContainer>
  );
};
