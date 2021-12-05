import React from "react";
import styled from "styled-components";
import { ButtonCheckout } from "./ButtonCheckout";
import { OrderListItem } from "./OrderListItem";

const OrderStyled = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    padding: 100px 20px 20px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    min-width: 380px;
    height: 100%;
    box-shadow: 3px 4px 5px rgba(0,0,0,0.2);
    z-index: 2;
`;

const OrderTitle = styled.h2`
    text-align: center;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`
    
`;

const TotalPrice = styled.div`
    min-width: 65px;
    margin: 0 15px 0 20px;
    text-align: right;
`;

const Total = styled.div`
    margin-bottom: 30px;
    display: flex;
    & span:first-child {
        flex-grow: 1;
    }
`;

export const Order = ({openItem, setOpenItem}) => {
    return (
        <OrderStyled>
            <OrderTitle>Order</OrderTitle>
            <OrderContent>
                <OrderList>
                    <OrderListItem />
                    <OrderListItem />
                    <OrderListItem />
                </OrderList>
            </OrderContent>
            <Total>
                <span>Итого:</span>
                <span>5</span>
                <TotalPrice>{(5000).toLocaleString('ru-KZ',
                    {style: 'currency', currency: 'KZT', maximumFractionDigits: 0}
                )}</TotalPrice>
            </Total>
            <ButtonCheckout>Order</ButtonCheckout>
        </OrderStyled>
    );
};