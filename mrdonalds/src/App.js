import React from 'react';
import {NavBar} from './components/Navbar/NavBar';
import {Menu} from './components/Menu/Menu';
import {GlobalStyle} from './GlobalStyle';
import {ModalItem} from './components/Modal/ModalItem';
import {Order} from './components/Order/Order';
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
