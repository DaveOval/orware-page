import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const slide = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
`;

const CarruselBrandsContainer = styled.div`
    overflow: hidden;
    padding: 50px 0;
    white-space: nowrap;
    position: relative;
    display: flex;
    &:before {
        position: absolute;
        top: 0;
        left: 0; 
        width: 250px;
        height: 100%;
        content: "";
    }
    &:after {
        position: absolute;
        top: 0;
        right: 0; 
        width: 250px;
        height: 100%;
        content: "";
        z-index: 2;
    }
`;

const Logos_slider = styled.div`
    display: flex;
    flex-direction: row;
    animation: ${slide} 35s linear infinite;
    img {
        margin: auto 50px;
        width: 190px;
    }
    &:hover {
        animation-play-state: paused;
    }
    
`;

export const CarruselBrands = () => {
  return (
    <CarruselBrandsContainer>
        <Logos_slider>
            <img src={`${import.meta.env.BASE_URL}/brands/grandstream.png`} alt="Logo grandstream" />
            <img src={`${import.meta.env.BASE_URL}/brands/hinksemi.png`} alt="Logo hinksemi" />
            <img src={`${import.meta.env.BASE_URL}/brands/linkedpro.png`} alt="Logo linkedpro" />
            <img src={`${import.meta.env.BASE_URL}/brands/mikrotik.png`} alt="Logo mikrotik" />
            <img src={`${import.meta.env.BASE_URL}/brands/panduit.png`} alt="Logo panduit" />
            <img src={`${import.meta.env.BASE_URL}/brands/tp-link.png`} alt="Logo tp-link" />
            <img src={`${import.meta.env.BASE_URL}/brands/ubiquiti.png`} alt="Logo ubiquiti" />
        </Logos_slider>
        <Logos_slider>
            <img src={`${import.meta.env.BASE_URL}/brands/grandstream.png`} alt="Logo grandstream" />
            <img src={`${import.meta.env.BASE_URL}/brands/hinksemi.png`} alt="Logo hinksemi" />
            <img src={`${import.meta.env.BASE_URL}/brands/linkedpro.png`} alt="Logo linkedpro" />
            <img src={`${import.meta.env.BASE_URL}/brands/mikrotik.png`} alt="Logo mikrotik" />
            <img src={`${import.meta.env.BASE_URL}/brands/panduit.png`} alt="Logo panduit" />
            <img src={`${import.meta.env.BASE_URL}/brands/tp-link.png`} alt="Logo tp-link" />
            <img src={`${import.meta.env.BASE_URL}/brands/ubiquiti.png`} alt="Logo ubiquiti" />
        </Logos_slider>
    </CarruselBrandsContainer>
  );
};
