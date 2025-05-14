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


function ComidasList() {
  const [comidas, setComidas] = useState([]);
  const [nome, setNome] = useState("");
  const [filtro, setFiltro] = useState("salgado");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "comidas"), (snapshot) => {
      const lista = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setComidas(lista);
    });

    return () => unsubscribe();
  }, []);

  const reservar = async (id) => {
    if (!nome.trim()) {
      alert("Digite seu nome!");
      return;
    }

    const comidaDoc = doc(db, "comidas", id);
    const item = comidas.find(c => c.id === id);
    
    if (item.reservadoPor) {
      alert("Essa comida já foi reservada por outra pessoa.");
      return;
    }

    await updateDoc(comidaDoc, { reservadoPor: nome });
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

      <ListaUl className="space-y-2">
        {comidas
        .filter(comida => comida.tipo === filtro)
        .map(comida => (
          <ListaOl key={comida.id}>
            <Nome>
              {comida.nome} <br />
            </Nome>
            <Reservado>
              {comida.reservadoPor && ` (Reservado)`}
            </Reservado>
            {!comida.reservadoPor && (
              <Botao
                tipo="reservar"
                onClick={() => reservar(comida.id)}
              >
                👨‍🌾Reservar👩‍🌾
              </Botao>
            )}
          </ListaOl>
        ))}
      </ListaUl>
    </>
  );
}

export default ComidasList;
