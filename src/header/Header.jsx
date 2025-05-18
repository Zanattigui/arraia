import { GlobalStyle } from "./styles";
import { Titulo } from "./styles";
import { P, Pzin } from "./styles";


function Header () {
    return (
        <>
            <GlobalStyle />
            <Titulo>Pratos para festa Junina 🍽️</Titulo>
            <P>Escolha um prato doce e um prato salgado para trazer e tornar nossa Festa Junina ainda mais deliciosa!</P>
            <Pzin>(Selecione um prato doce e um salgado)</Pzin>

        </>
    )
}

export default Header