import { useState } from 'react';
import styled from 'styled-components';
import Reset from './GlobalStyle/Reset';
import GlobalStyle from './GlobalStyle/GlobalStyle';
import Title from "./Title";
import Questions from "./Questions"
import Footer from "./Footer"

function App() {
  return (
    <>
    <Reset/>
    <GlobalStyle/>

    <Zap>
      <Title/>
      <Questions/>
    </Zap>
    <Footer/>
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