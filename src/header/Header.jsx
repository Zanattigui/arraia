import { GlobalStyle } from "./styles";
import { Titulo } from "./styles";
import { P } from "./styles";


function Header () {
    return (
        <>
            <GlobalStyle />
            <Titulo>Pratos para festa Junina 🍽️</Titulo>
            <P>Selecione um prato delicioso para trazer para nossa Festa Junina!</P>

        </>
    )
}

export default Header