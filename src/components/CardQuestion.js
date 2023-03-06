import styled from "styled-components"

import { useState } from 'react';
import iconeCerto from "../images/icone_certo.png"
import iconeErrado from "../images/icone_erro.png"
import iconeQuase from "../images/icone_quase.png"
import setaPlay from "../images/seta_play.png"
import setaVirar from "../images/seta_virar.png"


export default function CardQuestion({card, contador, setContador}) {

    const {number, question, answer} = card
    const [typeCard, setTypeCard] = useState(0)
    const [colorBackground, setColorBackground] = useState("#FFFFFF")
    const [heightQuestion, setHeightQuestion] = useState("65px")
    const [buttonOnclick, setButtonOnclick] = useState(setaPlay)
    const [dataTestButton, setdataTestButton] = useState("play-btn")

    console.log(contador)

    function clickPlay() {
        if (typeCard === 0) {
            setTypeCard(1)
            setColorBackground("#FFFFD4")
            setHeightQuestion("130px")
            setButtonOnclick(setaVirar)
            setdataTestButton("turn-btn")

        } else if (typeCard === 1) {
            setTypeCard(2)
            setButtonOnclick()
        }
        
      }

    function questionText(){
        if(typeCard === 0) {
            return number
        } else if (typeCard === 1){
            return question
        } else if(typeCard === 2){
            return answer
        } else {return number}
    } 

    function clickNaoLembrei(){
        let novoContagem = contador + 1;
        setContador(novoContagem)
        setTypeCard(3)
        setColorBackground("#FFFFFF")
        setHeightQuestion("65px")
        setButtonOnclick(iconeErrado)
}

    function clickQuaseNaoLembrei(){
        let novoContagem = contador + 1;
        setContador(novoContagem)
        setTypeCard(4)
        setColorBackground("#FFFFFF")
        setHeightQuestion("65px")
        setButtonOnclick(iconeQuase)
}

    function clickLembrei(){
        let novoContagem = contador + 1;
        setContador(novoContagem)
        setTypeCard(5)
        setColorBackground("#FFFFFF")
        setHeightQuestion("65px")
        setButtonOnclick(iconeCerto)
    }


    

    return (
        <div data-test="flashcard">
            <Question
            typeCard={typeCard}
            colorBackground={colorBackground}
            heightQuestion={heightQuestion}
            contador={contador}
            setContador={setContador}
            > <div data-test="flashcard-text">{questionText()}</div>
                <img 
                    src={buttonOnclick} 
                    onClick={clickPlay}
                    data-test={dataTestButton}/>

            <ContainerOptions
            typeCard={typeCard}>
            
            <div data-test="no-btn">
            <BoxOptions1
            typeCard={typeCard}
            onClick={clickNaoLembrei}
            >Não lembrei</BoxOptions1>
            </div>

            <div data-test="no-btn">
            <BoxOptions2
            typeCard={typeCard}
            onClick={clickQuaseNaoLembrei}
            data-test="no-btn">Quase não lembrei</BoxOptions2>
            </div>

            <div data-test="no-btn">
            <BoxOptions3
            typeCard={typeCard}
            onClick={clickLembrei}
            data-test="no-btn">Zap!</BoxOptions3>
            </div>

            </ContainerOptions>

            </Question>
        </div>

    )
}


const Question = styled.div`
    font-family: 'Recursive', sans-serif;
    font-size: 16px;
    font-weight: ${props => props.typeCard === 0 || props.typeCard === 3 || props.typeCard === 4 || props.typeCard === 5 ? "700" : "400"};
    width: 300px;
    height: ${props => props.heightQuestion};
    background: ${props => props.colorBackground};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: ${props => props.typeCard === 2 ? "column" : "row"};
    justify-content: space-between;
    padding: 16px;
    box-sizing: border-box;
    align-items: center;
    margin-bottom: 32px;
    color: ${props => props.typeCard === 5 ? "#2FBE34" : props.typeCard === 3 ? "#FF3030" : props.typeCard === 4 ? "#FF922E" : "black"};
    text-decoration: ${props => props.typeCard === 3 || props.typeCard === 4 || props.typeCard === 5 ? "line-through" : "none"};

    img{
        width: ${props => props.typeCard === 0 || props.typeCard === 3 || props.typeCard === 4 || props.typeCard === 5 ? "20px" : props.typeCard === 1 ? "33px" : "0px"};
        height: ${props => props.typeCard === 0 || props.typeCard === 3 || props.typeCard === 4 || props.typeCard === 5 ? "23px" : props.typeCard === 1 ? "20px" : "0px"};
    }
`

const ContainerOptions = styled.div`
    display: ${props => props.typeCard === 2 ? "flex" : "none"};
    flex-direction: row;
    justify-content: space-between;
    width: 101%;
`

const BoxOptions1 = styled.div`
    width: 85.17px;
    height: 37.17px;
    font-family: 'Recursive', sans-serif;
    font-size: 12px;
    display: ${props => props.typeCard === 2 ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #FF3030;
    border-radius: 5px;
    color: white;
`

const BoxOptions2 = styled.div`
    width: 85.17px;
    height: 37.17px;
    font-family: 'Recursive', sans-serif;
    font-size: 12px;
    display: ${props => props.typeCard === 2 ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #FF922E;
    border-radius: 5px;
    color: white;
`

const BoxOptions3 = styled.div`
    width: 85.17px;
    height: 37.17px;
    font-family: 'Recursive', sans-serif;
    font-size: 12px;
    display: ${props => props.typeCard === 2 ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #2FBE34;
    border-radius: 5px;
    color: white;
`