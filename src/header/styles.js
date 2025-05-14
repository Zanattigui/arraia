import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import fontTitulo from "../assets/fonts/Chunq.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'FestaJunina';
    src: url(${fontTitulo}) format('truetype');
  }
`;

export const Titulo = styled.h1`
  font-family: 'FestaJunina', sans-serif;
  font-size: 2.5rem;
  color: #774E40;
  text-align: center;
  max-width: 100%;
  overflow: hidden;
`;

export const P = styled.p`
    color:rgb(95, 70, 62);
    font-size: 1.5em;
    text-align: center;
`

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 2px auto;

  &:focus {
    outline: none;
    border: 1px solid gray;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
`
