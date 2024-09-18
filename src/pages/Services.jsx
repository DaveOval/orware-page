import styled from "@emotion/styled";
import { uicolors } from "../ui/color";
import { ServiceCard } from "../components/";
import aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { services } from "../data/services";

const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    padding-top: 100px;
    margin: 0 auto;
    text-align: center;
    min-height: 100vh;
    h1 {
        font-size: 50px;
        color: white;
        font-weight: 500;
        span {
            color: ${uicolors.primary};
            font-size: 50px;
        }
    }
    p {
        color: white;
        font-size: 20px;
        margin: 20px 0;
    }
    span {
        color: ${uicolors.primary};
        font-size: 20px;
    }
`
const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
    height: fit-content;
`

export const Services = () => {
    return (
        <ServicesContainer>
            <h1 data-aos="fade-up">Nuestros <span>Servicios</span></h1>
            <p data-aos="fade-up">En Orware, ofrecemos una gama de servicios diseñados para ayudarte a alcanzar tus objetivos tecnológicos. Desde el diseño web innovador hasta soluciones personalizadas para tus necesidades específicas, nuestro equipo está comprometido a brindarte excelencia y creatividad en cada proyecto.</p>
            <ServicesGrid>
                {services.map((service, index) => (
                    <ServiceCard key={index} title={service.title} description={service.subtitle} link={service.link} image={service.image} orientation={service.orientation} />
                ))}
            </ServicesGrid>

        </ServicesContainer>
    );
}
