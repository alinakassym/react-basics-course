import React from 'react';
import {NavBar} from './components/NavBar';
import {Menu} from './components/Menu';
import {GlobalStyle} from './GlobalStyle';
import {ModalItem} from './components/ModalItem';
import {Order} from './components/Order';
import {useOpenItem} from './components/Hooks/useOpenItem';
import {useOrders} from './components/Hooks/useOrders';

function App() {

  const openItem = useOpenItem();
  const orders = useOrders();

  console.log('openItem: ', openItem);
  return (
    <>
    <GlobalStyle />
    <NavBar />
    <Order {...orders}/>
    <Menu {...openItem} />
    {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
