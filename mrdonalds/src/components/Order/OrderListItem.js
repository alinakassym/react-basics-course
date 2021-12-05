import React from "react";
import styled from "styled-components";
import trashImage from '../../images/trashcan.svg';

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`;

export const OrderListItem = ({order}) => {
    return (
        <OrderItemStyled>
            <ItemName>{order.name}</ItemName>
            <span>1</span>
            <ItemPrice>{order.price && order.price.toLocaleString('ru-KZ', {
                style: 'currency', currency: 'KZT', maximumFractionDigits: 0
            })}</ItemPrice>
            <TrashButton />
        </OrderItemStyled>
    );
};