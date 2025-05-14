import styled from "styled-components";

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

export const ListaUl = styled.ul`
  padding: 0px;
`

export const ListaOl = styled.ol`
  color: black;
  border: 2px solid #facc15;
  display: block;
  text-align: center;
  padding: 35px;
  margin: 20px 5px;
  border-radius: 10px;
  background-color:rgb(255, 255, 255);
`

export const Nome = styled.span`
  font-size: 1.5rem;
  font-family: Sans-serif;
  font-weight: bold;
`

export const Reservado = styled.p`
  font-size: 0.9rem;
  color: #78716C;
`

export const Botao = styled.button`
  background-color: #facc15;
  color: #7c2d12; 
  padding: 12px 24px;
  font-size: 1.1rem;
  font-weight: bold;
  font-family: 'FestaJunina', sans-serif; 
  border: 2px dashed #ea580c; 
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  letter-spacing: 1.5px;

  &:hover {
    background-color: #fde047;
    transform: translateY(-2px);
  }
`;
