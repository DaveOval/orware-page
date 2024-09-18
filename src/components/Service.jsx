import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { animation, uicolors } from '../ui/color';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ServiceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 20px;
    height: 300px;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column !important;
        height: auto;
    }
`
const ServiceTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    width: 50%;
    h2 {
        font-size: 30px;
        color: #E4E4E4;
    }
    p {
        color: #ADADAD;
        font-size: 20px;
        margin: 20px 0;
    }
    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
    }
`
const CustomLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 15px;
    margin-right: 20px;
    cursor: pointer;
    transition: ${animation.primary};
    background-color: ${uicolors.secundary};
    padding: 15px 25px;
    border-radius: 8px;
    max-width: 150px;
    text-align: center;
    &:hover {
        background-color: ${uicolors.primary};
    }
    @media (max-width: 768px) {
        margin: 20px auto;
    }
`
const ServiceImagen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    max-height: 300px;
    picture {
        width: 100%;
        height: 300px;
        overflow: hidden;
        border-radius: 30px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    @media (max-width: 768px) {
        width: 100%;
        picture {
            height: 200px;
        }
    }
`

export const Service = ({ title, subtitle, link, image, orientation }) => {
    useEffect(() => {
        AOS.init({
          duration: 100,
        });
        AOS.refresh(); 
      }, []);

  return (
    <ServiceContainer 
        style={{ flexDirection: orientation === 'right' ? 'row-reverse' : 'row' }}
        data-aos={orientation === 'right' ? 'fade-left' : 'fade-right'}
    >
        <ServiceTexto>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <CustomLink to={link}>
                Ver más
            </CustomLink>
        </ServiceTexto>
        <ServiceImagen>
            <picture>
                <img src={`${import.meta.env.BASE_URL}${image}`} alt={title} loading="lazy" />
            </picture>
        </ServiceImagen>
    </ServiceContainer>
  )
}
