import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ModalContainer, ModalContent, Input, Select, Botao } from "./styles";

function OutroModal({ onClose }) {
  const [nome, setNome] = useState("");
  const [comida, setComida] = useState("");
  const [tipo, setTipo] = useState("salgado");

  const adicionarComida = async () => {
    if (!nome.trim() || !comida.trim()) {
      alert("Preencha todos os campos!");
      return;
    }

    await addDoc(collection(db, "comidas"), {
      nome: comida.trim(),
      tipo,
      reservadoPor: nome.trim()
    });

    onClose(); // fecha o modal
  };

  return (
    <ModalContainer>
      <ModalContent>
        <Input
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          maxLength={17}
        />
        <Input
          placeholder="Nome da comida"
          value={comida}
          onChange={(e) => setComida(e.target.value)}
        />
        <Select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="salgado">Salgado</option>
          <option value="doce">Doce</option>
        </Select>
        <div className="flex gap-2 mt-4">
          <Botao tipo="cancelar" onClick={onClose}>Cancelar</Botao>
          <Botao tipo="confirmar" onClick={adicionarComida}>Adicionar</Botao>
          
        </div>
      </ModalContent>
    </ModalContainer>
  );
}
export default OutroModal;
