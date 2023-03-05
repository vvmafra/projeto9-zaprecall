import styled from 'styled-components';

export default function Footer({contador,cards}) {


    return (
        <>
            <DivFooter><div data-test="footer">{contador}/{cards.length} CONCLUÍDOS</div></DivFooter>
        </>
    )
}

const DivFooter = styled.div`
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    color: #333333;
    position: fixed;
    bottom: 0px;
    left: 0px;
    height: 70px;
    width: 100%;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
`