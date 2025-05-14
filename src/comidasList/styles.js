import styled from "styled-components";

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 2px auto;
  font-size: 1.2rem;

  &:focus {
    outline: none;
    border: 1px solid gray;
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 15px;
`

export const ListaUl = styled.ul`
  padding: 0px;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
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

  @media (min-width: 768px) {
  height: 100px;
  width: 300px;
  }
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
  background-color: ${({ tipo, ativo }) => {
    if (tipo === "reservar") return "#facc15"; 
    if (tipo === "doce") return ativo ? "#F77F00" : "#fff";
    if (tipo === "salgado") return ativo ? "#774936" : "#fff";
    return "#facc15";
  }};

  color: ${({ tipo, ativo }) => {
    if (tipo === "reservar") return "#7c2d12"; // branco no reservar
    if ((tipo === "doce" || tipo === "salgado") && ativo) return "#fff"; // texto branco se ativo doce ou salgado
    if ((tipo === "doce" || tipo === "salgado") && !ativo) return "#7c2d12"; // texto marrom escuro inativo
    return "#7c2d12"; // padrão texto marrom
  }};

  border: ${({ tipo }) => (tipo === "reservar" ? "2px dashed #ea580c" : "none")};


  padding: 12px 24px;
  font-size: 1.1rem;
  font-weight: bold;
  font-family: 'FestaJunina', sans-serif; 
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  letter-spacing: 1.5px;
`;