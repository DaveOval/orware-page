import styled from "@emotion/styled";
import { uicolors } from "../ui/color";
import { Link } from "react-router-dom";

const ServiceCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    background-color: ${uicolors.background};
    border-radius: 40px;
    width: 100%;
    img {
        border-radius: 40px 40px 0 0;
        width: 100%;
        height: 50%;
        object-fit: cover;
    }
    h2 {
        color: white;
        font-size: 30px;
        font-weight: 500;
    }
    p {
        color: white;
        font-size: 20px;
        padding: 0 20px;
        text-align: center;
    }
`
const CustomLink = styled(Link)`
    background-color: ${uicolors.primary};
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
        background-color: ${uicolors.secondary};
    }
    margin-bottom: 20px;
`;


export const ServiceCard = ({ title, description, link, image }) => {
  return (
    <ServiceCardContainer>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <CustomLink to={link}>
            Ver más
        </CustomLink>
    </ServiceCardContainer>
  )
}
