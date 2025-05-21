import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { Input } from "./styles";
import { Container } from "./styles"
import { ListaUl } from "./styles";
import { ListaOl } from "./styles";
import { Nome } from "./styles";
import { Reservado } from "./styles";
import { Botao } from "./styles";
import OutroModal from "../modalOutraComida/modalOutra";


function ComidasList() {
  const [comidas, setComidas] = useState([]);
  const [nome, setNome] = useState("");
  const [filtro, setFiltro] = useState("salgado");
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "comidas"), (snapshot) => {
      const lista = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          reservadoPor: Array.isArray(data.reservadoPor) ? data.reservadoPor : []
        };
      });
      setComidas(lista);
    });

    return () => unsubscribe();
  }, []);

  const reservar = async (id) => {
    if (!nome.trim()) {
      alert("Digite seu nome!");
      return;
    } else {
      alert(`Prato reservado com sucesso! ${nome}`);
    }

    const item = comidas.find(c => c.id === id);
    const comidaDoc = doc(db, "comidas", id);
    const novaLista = [...(item.reservadoPor || []), nome];

    await updateDoc(comidaDoc, { reservadoPor: novaLista });
  };

  return (
    <>
      <Container>
          <Input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          maxLength={17}
          />
      </Container>

      <Container>
        <Botao tipo="doce" ativo={filtro === "doce"} onClick={() => setFiltro("doce")}>
          Pratos Doces
        </Botao>
        <Botao tipo='salgado' ativo={filtro === "salgado"} onClick={() => setFiltro("salgado")}>
          Pratos Salgados
        </Botao>
      </Container>
      <Botao tipo="confirmar" onClick={() => setMostrarModal(true)}>
        Outro prato
      </Botao>
      <ListaUl className="space-y-2">
        {comidas
        .filter(comida => comida.tipo === filtro)
        .sort((a, b) => {
          const aCheio = (a.reservadoPor?.length || 0) >= a.maxReservas;
          const bCheio = (b.reservadoPor?.length || 0) >= b.maxReservas;

          const aPeso = aCheio ? 2 : (a.reservadoPor?.length || 0); // vazio = 0, 1/2 = 1, cheio = 2
          const bPeso = bCheio ? 2 : (b.reservadoPor?.length || 0);

          return aPeso - bPeso;
        })
        .map(comida => (
          <ListaOl key={comida.id}>
            <div style={{ position: "absolute", top: "8px", right: "8px", fontWeight: "bold" }}>
              {comida.reservadoPor?.length || 0}/{comida.maxReservas}
            </div>
            <Nome>
              {comida.nome} <br />
            </Nome>
            <Reservado>
              {comida.reservadoPor?.length >= comida.maxReservas && " (Reservado)"}
            </Reservado>
            {(comida.reservadoPor?.length ?? 0) < comida.maxReservas && (
              <Botao tipo="reservar" onClick={() => reservar(comida.id)}>
                👨‍🌾Reservar👩‍🌾
              </Botao>
            )}
          </ListaOl>
        ))}
      </ListaUl>
      {mostrarModal && (
        <OutroModal onClose={() => setMostrarModal(false)} />
      )}
    </>
  );
}

export default ComidasList;
