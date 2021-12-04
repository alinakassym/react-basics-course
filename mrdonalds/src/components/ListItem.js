import React from "react";
import styled from "styled-components";

const List = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Item = styled.li`
    position: relative;
    margin: 15px;
    padding: 15px;
    width: 400px;
    height: 155px;
    font-size: 30px;
    background-image: ${({img}) => `url(${img})`};
    background-position: center;
    background-size: cover;
    color: #FFFFFF;
    z-index: 1;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: #000000;
        opacity: 0.5;
        z-index: -1;
    }
    &:hover {
        cursor: pointer;
        box-shadow: inset 0 0 50px 30px rgba(0, 0, 0, 0.5);
        &:after {
            opacity: 0;
        }
    }
`;

export const ListItem = ({itemList}) => {
    return (
        <List>
            {itemList.map((el, index) => (
                <Item
                    key={index}
                    img={el.img}
                >
                    <p>{el.name}</p>
                    <p>{el.price.toLocaleString('ru-KZ', 
                    {style: 'currency', currency: 'KZT'})}</p>
                </Item>
            ))}
        </List>
    )
}