import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from '../Titulo/index.js';
import styled from "styled-components";
import CardRecomenda from "../CardRecomenda/index.js";
import imagemLivro from'../../imagens/livro2.png';

const UltimosLancamentosContainer = styled.section`
background-color: #EBECEE;
padding-bottom: 20px;
display: flex;
flex-direction: column;
`

const NovosLivrosContainer = styled.div`
margin-top: 10px;
display: flex;
width: 100%;
justify-content: center;
cursor: pointer;
`
const ImgLivro = styled.img`
width: 10%;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
            cor={"#000"}
            tamanhoFonte={"36px"}
            // alinhamento={"left"}

            >ULTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
            {livros.map(livro => (
                <ImgLivro src={livro.src} />
            ))}
            </NovosLivrosContainer>

        <CardRecomenda 
            titulo={"Talve você se interesse por"}
            subtitulo={"Angular 11"}
            descricao={"Construindo uma aplicação com a plataforma Google"}
            img={imagemLivro}
            
        />

        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;