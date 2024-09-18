import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { animation, uicolors } from "../ui/color"

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 100%;
    background-color: ${uicolors.background};
    color: white;
    font-size: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    @media (max-width: 768px) {
        flex-direction: column !important;
        height: auto;
    }
`
const FooterHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 20px;
    width: 100%;
    max-width: 1200px;
    border-bottom: 2px solid ${uicolors.primary};
    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        list-style: none;
        li {
            margin: 0 5px;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column !important;
        height: auto;
    }
`
const FooterBody = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
`
const CustomLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    transition: ${animation.primary};
    padding: 15px 25px;
    max-width: 150px;
    text-align: center;
    &:hover {
        text-decoration: underline;
    }
`
const date = new Date();
const year = date.getFullYear();


export const Footer = () => {
  return (
    <FooterContainer>
        <FooterHeader>
            <picture>
                <img src={`${import.meta.env.BASE_URL}/logoorware.png`} alt="logo orware" />
            </picture>
            <ul>
                <li>
                    <CustomLink to="/">Inicio</CustomLink>
                </li>
                <li>
                    <CustomLink to="/sobre-nosotros">Sobre nosotros</CustomLink>
                </li>
                <li>
                    <CustomLink to="/servicios">Servicios</CustomLink>
                </li>
                <li>
                    <CustomLink to="/contacto">Contacto</CustomLink>
                </li>
            </ul>
        </FooterHeader>
        <FooterBody>
            <p>Orware {year} - Todos los derechos reservados</p>
        </FooterBody>
    </FooterContainer>
  )
}
