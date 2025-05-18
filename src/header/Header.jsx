import { GlobalStyle } from "./styles";
import { Titulo } from "./styles";
import { P, Pzin } from "./styles";


function Header () {
    return (
        <>
            <GlobalStyle />
            <Titulo>Pratos para festa Junina 🍽️</Titulo>
            <P>Selecione um prato delicioso para trazer para nossa Festa Junina!</P>
            <Pzin>(Selecione um prato doce e um salgado)</Pzin>

        </>
    )
}

export default Header