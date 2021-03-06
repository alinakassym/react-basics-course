import React from "react";
import styled from "styled-components";
import { ButtonCheckout } from "../Controls/ButtonCheckout";
import { CountItem } from "./CountItem";
import { useCount } from "../Hooks/useCount";
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    z-index: 10;
`;

const Modal = styled.div`
    background-color: #FFFFFF;
    width: 600px;
    height: 600px;
`;

const Banner = styled.div`
    margin-bottom: 20px;
    height: 200px;
    width: 100%;
    background-image: ${({ img }) => `url(${img})`};
    background-size: cover;
    background-position: center;
`;

const Content = styled.div`
    padding: 20px 35px;
    height: calc(100% - 250px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

const NamePrice = styled.div`
    display: flex;
    justify-content: space-between;
`;



export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

  const counter = useCount();

  const closeModal = e => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  const order = {
    ...openItem,
    count: counter.count,
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  }

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>

        <Banner img={openItem.img} />
        <Content>
          <NamePrice>
            <h3>{openItem.name}</h3>
            <h3>{openItem.price.toLocaleString('ru-KZ',
              { style: 'currency', currency: 'KZT', maximumFractionDigits: 0 })}</h3>
          </NamePrice>
          <CountItem {...counter} />
          <TotalPriceItem>
            <span>Total:</span>
            <span>{formatCurrency(totalPriceItems(order))}</span>
          </TotalPriceItem>
          <ButtonCheckout onClick={addToOrder}>Add</ButtonCheckout>
        </Content>
      </Modal>
    </Overlay>
  );
};