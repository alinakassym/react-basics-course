import React from 'react';
import {NavBar} from './components/NavBar';
import {Menu} from './components/Menu';
import {GlobalStyle} from './GlobalStyle';

function App() {
  return (
    <>
    <GlobalStyle />
    <NavBar />
    <Menu />
    </>
  );
}

export default App;
