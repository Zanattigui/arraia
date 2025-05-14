import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";

import { Input } from "./styles";
import { ContainerInput } from "./styles"
import { ListaUl } from "./styles";
import { ListaOl } from "./styles";
import { Nome } from "./styles";
import { Reservado } from "./styles";
import { Botao } from "./styles";


function ComidasList() {
  const [comidas, setComidas] = useState([]);
  const [nome, setNome] = useState("");


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


      <ContainerInput>
          <Input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          maxLength={17}
          />
      </ContainerInput>

      <ListaUl className="space-y-2">
        {comidas.map(comida => (
          <ListaOl key={comida.id}>
            <Nome>
              {comida.nome} <br />
            </Nome>
            <Reservado>
              {comida.reservadoPor && ` (Reservado)`}
            </Reservado>
            {!comida.reservadoPor && (
              <Botao
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
