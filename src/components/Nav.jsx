import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { uicolors } from "../ui/color";

// Animaciones definidas usando keyframes
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
    scale: 0.8;
  }
  to {
    opacity: 1;
    transform: translateX(0);
    scale: 1;
  }
`;

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
    scale: 1;
  }
  to {
    opacity: 0;
    transform: translateX(100%);
    scale: 0.8;
  }
`;

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
  background-color: #ffffff;
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

  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.4s ease-in-out;
`;

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Cierra el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
        <LinkContainer ref={menuRef} isOpen={isOpen}>
          <Link  onClick={toggleMenu} to="/">Inicio</Link>
          <Link  onClick={toggleMenu} to="/sobre-nosotros">Sobre nosotros</Link>
          <Link  onClick={toggleMenu} to="/servicios">Servicios</Link>
          <Link  onClick={toggleMenu} to="/contacto">Contacto</Link>
        </LinkContainer>
      )}
    </NavContainer>
  );
};
