import logo from "./images/logo.png"
import styled from 'styled-components';

export default function Title() {


    return (
        <TitleDiv>
        <img src={logo}></img>
        <div>ZapRecall</div>
        </TitleDiv>
    )
}

const TitleDiv = styled.div`
    font-family: 'Righteous', cursive;
    font-size: 36px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 42px;
    margin-top: 42px;

    img {
        width: 52px;
        height: 60px;
    }
    div {
        margin-left: 10px;
    }
`