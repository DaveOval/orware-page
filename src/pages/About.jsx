import styled from "@emotion/styled";
import { uicolors } from "../ui/color";
import aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

// Estilos para el contenedor de la sección "Sobre Nosotros"
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  padding-top: 100px;
  margin: 0 auto;
  text-align: center;
  height: 100vh;

  h1 {
    font-size: 50px;
    color: white;
    font-weight: 500;
    span {
      color: ${uicolors.primary};
      font-size: 50px;
    }
  }

  h2 {
    font-size: 40px;
    color: white;
    font-weight: 500;
    span {
      color: ${uicolors.primary};
      font-size: 40px;
    }
  }

  p {
    color: white;
    font-size: 20px;
    margin: 20px 0;
    line-height: 1.6;
  }

  span {
    color: ${uicolors.primary};
    font-size: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 20px 0;

    li {
      font-size: 18px;
      color: white;
      margin: 10px 0;
    }
  }
`;

export const About = () => {
  useEffect(() => {
    aos.init({ duration: 1000 }); 
  }, []);

  return (
    <AboutContainer data-aos="fade-up">
      <h1 data-aos="fade-in" data-aos-delay="100">
        Sobre <span>Nósotros</span>
      </h1>
      <p data-aos="fade-in" data-aos-delay="200">
        En <span>Orware</span>, somos una empresa de tecnología apasionada por resolver desafíos complejos con soluciones innovadoras. Nuestro equipo está compuesto por profesionales altamente cualificados en diversas áreas de la tecnología, incluyendo desarrollo de software, instalación de redes, CCTV y más. Nos enorgullece ofrecer un servicio personalizado y de alta calidad a cada uno de nuestros clientes, ayudándoles a alcanzar sus objetivos de negocio y a mantenerse a la vanguardia de la transformación digital.
      </p>
      <p data-aos="fade-in" data-aos-delay="300">
        <span>Nuestra Misión</span>: Proporcionar soluciones tecnológicas personalizadas que ayuden a nuestros clientes a alcanzar sus objetivos de negocio y mejorar sus procesos mediante el uso de tecnología avanzada.
      </p>
      <p data-aos="fade-in" data-aos-delay="400">
        <span>Nuestra Visión</span>: Ser líderes en el sector tecnológico, reconocidos por nuestra capacidad para ofrecer soluciones creativas y efectivas que impulsen el crecimiento y la transformación digital de las empresas.
      </p>
      <p data-aos="fade-in" data-aos-delay="500">
        <h2><span>Valores</span></h2>
        <ul>
          <li><span>Innovación:</span> Buscamos siempre estar a la vanguardia de la tecnología.</li>
          <li><span>Compromiso:</span> Estamos comprometidos con el éxito de nuestros clientes.</li>
          <li><span>Integridad:</span> Actuamos con honestidad y transparencia en todas nuestras interacciones.</li>
          <li><span>Colaboración:</span> Fomentamos un ambiente de trabajo colaborativo y de apoyo mutuo.</li>
        </ul>
      </p>
    </AboutContainer>
  );
};
