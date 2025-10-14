import styled from "styled-components";

const Opcoes = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ))}
            {/* O Reactor pega o array de <li> que o map gerou e rederiza tudo dentro da <ul>. */}
        </Opcoes>
    )
}

export default OpcoesHeader;