import styled from "@emotion/styled";
import { uicolors } from "../ui/color";
import aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  max-width: 750px;
  padding-top: 100px;
  margin: 0 auto;
  text-align: center;
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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  background-color: ${uicolors.background};
  border-radius: 40px;
  padding: 40px 20px;
  button {
    padding: 10px;
    border-radius: 8px;
    border: none;
    background-color: ${uicolors.primary};
    color: white;
    font-size: 20px;
    cursor: pointer;
    margin-top: 20px;
  }
`
const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  input {
    padding: 10px;
    border-radius: 8px;
    border: none;
    width: 100%;
    background-color: #3C3C3F;
    color: white;
  }
  textarea {
    padding: 10px;
    border-radius: 8px;
    border: none;
    width: 100%;
    background-color: #3C3C3F;
    color: white;
  }
  label {
    color: white;
    font-size: 20px;
    
  }
  
`

export const Contact = () => {
    useEffect(() => {
      aos.init({
        duration: 1000,
      });
    }, []);
  return (
    <ContactContainer data-aos="fade-up">
      <div>
        <h1>Contactanos</h1>
        <p>Have questions or need help? Fill out the form below, and we'll get back to you promptly. We're here to assist you!</p>
      </div>
      <Form>
        <FormInput>
          <label>Nombre</label>
          <input type="text" placeholder="Juan Perez" />
        </FormInput>
        <FormInput>
          <label>Email</label>
          <input type="email" placeholder="juan@correo.com" />
        </FormInput>
        <FormInput>
          <label>Mensaje</label>
          <textarea placeholder="Escribe tu mensaje" />
        </FormInput>
        <button>
          Enviar
        </button>
      </Form>
    </ContactContainer>
  )
}
