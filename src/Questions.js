import iconeCerto from "./images/icone_certo.png"
import iconeErrado from "./images/icone_erro.png"
import iconeQuase from "./images/icone_quase.png"
import setaPlay from "./images/seta_play.png"
import setaVirar from "./images/seta_virar.png"

import styled from 'styled-components';

export default function Questions() {

    return (
        <ContainerQuestions>
            <Question>Pergunta 1
                <img src={setaPlay} />
            </Question>

            <Question>Pergunta 2
                <img src={setaPlay} />
            </Question>

            <Question>Pergunta 3
                <img src={setaPlay} />
            </Question>

            <Question>Pergunta 4
                <img src={setaPlay} />
            </Question>

            <Question>Pergunta 5
                <img src={setaPlay} />
            </Question>

            <Question>Pergunta 6
                <img src={setaPlay} />
            </Question>

            <Question>Pergunta 7
                <img src={setaPlay} />
            </Question>

            <Question>Pergunta 8
                <img src={setaPlay} />
            </Question>

        </ContainerQuestions>
    )
}

const ContainerQuestions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Question = styled.div`
    font-family: 'Recursive', sans-serif;
    font-size: 16px;
    font-weight: 700;
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    align-items: center;
    margin-bottom: 25px;

    img{
        width: 20px;
        height: 23px;
    }
`