import { useState } from 'react';
import styled from 'styled-components';
import Title from "./components/Title";
import Questions from "./components/Questions"
import Footer from "./components/Footer"
import CARDS from "./components/cards"

function App() {
  const [contador, setContador] = useState(0)


  return (
    <>
    <Zap>
      <Title/>
      <Questions
      cards={CARDS}
      contador={contador}
      setContador={setContador}
      />
    </Zap>
    <Footer
    cards={CARDS}
    contador={contador}
    setContador={setContador}/>
    </>
  );
}

export default App;

const Zap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FB6B6B;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 52px;
`