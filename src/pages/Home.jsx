import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { uicolors , animation} from "../ui/color";
import { CarruselBrands, Service} from "../components";
import aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const HeroContainer = styled.div`
  margin-top: 150px;
  border-radius: 40px;
  background-color: ${uicolors.transparencia};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: ${animation.primary};
  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 0;
  }
  &:hover {
    background-color: ${uicolors.background};
  }
`;

const HeroTexto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  width: 50%;
  h1 {
    font-size: 50px;
    color: white;
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
  button {
    background-color: ${uicolors.secundary};
    color: white;
    padding: 15px 25px;
    border: none;
    border-radius: 8px;
    margin-right: 20px;
    cursor: pointer;
    font-size: 15px;
    transition: ${animation.primary};
    &:hover {
      background-color: ${uicolors.primary};
    }
  }
  @media (max-width: 768px) {
    width: 100%;

  }
`;
const HeroImagen = styled.div`
  width: 50%;
  picture {
    img {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CumstonLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 15px;
  margin-right: 20px;
  cursor: pointer;
  transition: ${animation.primary};
  background-color: ${uicolors.secundary};
  padding: 15px 25px;
  border-radius: 8px;
  &:hover {
    background-color: ${uicolors.primary};
  }
`;

const WhyUs = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px;
  margin-top: 40px;
  text-wrap: balance;
  h2 {
    font-size: 58px;
    font-weight: 500;
    span {
      color: ${uicolors.primary};
    }
  }
  p {
    color: white;
    font-size: 20px;
  }
`;

const WhyUsCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  gap: 20px;
  p {
    color: white;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const WhyUsCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${uicolors.transparencia};
  border-radius: 40px;
  padding: 20px;
  gap: 20px;
  transition: ${animation.primary};
  font-size: 20px !important;
  p {
    color: #adadad !important;
  }
  &:hover {
    background-color: ${uicolors.background};
  }
`
const WhyUsCardImg = styled.picture`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${uicolors.secundary};
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
    height: 80%;
    object-fit: cover;
  }
`;
const WhyUsCardText = styled.div`
  font-size: 30px;
`

const Services = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px;
  margin-top: 90px;
  gap: 100px;
  @media (max-width: 768px) {
    gap: 20px;
  }
`
const CallToAction = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  max-width: 750px;
  padding-top: 100px;
  margin: 0 auto;
  text-align: center;
  h2 {
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

export const Home = () => {

  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  }, []);

    return (
      <>
        <HeroContainer data-aos="fade-lef" >
          <HeroTexto>
            <h1>Soluciones Integrales en <span>Mantenimiento</span> y <span>Redes Tecnológicas</span></h1>
            <p>Especialistas en mantenimiento de PC, redes, automatización y más. Atención rápida y personalizada.</p>
            <div>
              <CumstonLink to="/contacto">
                Contactanos
              </CumstonLink>
              <button>
                Ver mas
              </button>
            </div>
          </HeroTexto>
          <HeroImagen>
            <picture>
              <img src={`${import.meta.env.BASE_URL}/engineers.png`} alt="Ingenieria en OrWare" />
            </picture>
          </HeroImagen>
        </HeroContainer>

        <CarruselBrands   />

        <WhyUs data-aos="fade-up">
          <div>
            <h2>Impulsa Tu Negocio con Soluciones <span>Tecnológicas Avanzadas</span></h2>
            <p>Descubre cómo nuestras soluciones tecnológicas transforman tus necesidades en resultados tangibles y eficientes. Sigue estos sencillos pasos para ver cómo podemos ayudarte a lograrlo.</p>
          </div>

          <WhyUsCards>
            <WhyUsCard data-aos="fade-up">
              <WhyUsCardImg>
                <img src={`${import.meta.env.BASE_URL}solution.svg`} alt="Solution"  />
              </WhyUsCardImg>
              <WhyUsCardText>Comparte Tu Proyecto</WhyUsCardText>
              <p>Proporciona los detalles de tu proyecto para que podamos comprender tus requerimientos y objetivos específicos.</p>
            </WhyUsCard>
            <WhyUsCard data-aos="fade-up">
              <WhyUsCardImg>
                <img src={`${import.meta.env.BASE_URL}/share.svg`} />
              </WhyUsCardImg>
              <WhyUsCardText>Genera Soluciones</WhyUsCardText>
              <p>Explora cómo creamos propuestas únicas y adaptadas a tus necesidades tecnológicas.</p>
            </WhyUsCard>
            <WhyUsCard data-aos="fade-up">
              <WhyUsCardImg>
                <img src={`${import.meta.env.BASE_URL}/perfect.svg`} />
              </WhyUsCardImg>
              <WhyUsCardText> Perfecciona Tu Proyecto</WhyUsCardText>
              <p>Ajusta y refina la solución elegida con nuestras herramientas y servicios personalizados para alcanzar la perfección.</p>
            </WhyUsCard>
          </WhyUsCards>
        </WhyUs>

        <Services>
          <Service
            title={"Mantenimiento de PC"}
            subtitle={"Reparación y mantenimiento de computadoras de escritorio y portátiles."}
            link={"/mantenimiento-pc"}
            image={"./pc_maintance.webp"}
            orientation={"right"}
          />
          <Service 
            title={"Software a Medida"}
            subtitle={"Desarrollo de software a medida para empresas y particulares."}
            link={"/software"}
            image={"./software.webp"}
            orientation={"left"}
          />
          <Service 
            title={"CCTV"}
            subtitle={"Instalación y mantenimiento de circuitos cerrados de televisión."}
            link={"/cctv"}
            image={"./cctv.webp"}
            orientation={"right"}
          />
          <Service 
            title={"Cableado Estructurado"}
            subtitle={"Diseño e instalación de redes de cableado estructurado."}
            link={"/cableado-estructurado"}
            image={"./cableado_estructurado.webp"}
            orientation={"left"}
          />
          <Service 
            title={"Fibras Ópticas"}
            subtitle={"Instalación y mantenimiento de redes de fibra óptica."}
            link={"/fibras-opticas"}
            image={"./fibra_optica.webp"}
            orientation={"right"}
          />
          <Service 
            title={"Armado de rack"}
            subtitle={"Armado y mantenimiento de racks para servidores y equipos de red."}
            link={"/armado-rack"}
            image={"./rack.webp"}
            orientation={"left"}
          />
          <Service 
            title={"Redes wifi"}
            subtitle={"Instalación y mantenimiento de redes wifi."}
            link={"/redes-wifi"}
            image={"./redes_wifi.webp"}
            orientation={"right"}
          />
          <Service 
            title={"Telefonia"}
            subtitle={"Instalación y mantenimiento de sistemas de telefonía IP y convencional."}
            link={"/telefonia"}
            image={"./telefonia.webp"}
            orientation={"left"}
          />
          <Service 
            title={"Proyectos de Automatización"}
            subtitle={"Desarrollo de proyectos de automatización industrial y domótica."}
            link={"/automatizacion"}
            image={"./automatizacion.webp"}
            orientation={"right"}
          />
        </Services>

        <CallToAction data-aos="fade-down" >
          <h2>¿Listo para comenzar? <span>Contáctanos</span></h2>
          <p>Descubre cómo nuestras soluciones tecnológicas transforman tus necesidades en resultados tangibles y eficientes. Sigue estos sencillos pasos para ver cómo podemos ayudarte a lograrlo.</p>
          <CumstonLink to="/contacto">
            Contactanos
          </CumstonLink>

        </CallToAction>
      </>
    );
}
