import React from "react";
import styled from "styled-components";

const Button = styled.button`
    display: block;
    margin: 0 auto;
    width: 250px;
    height: 65px;
    font-size: inherit;
    font-family: inherit;
    background-color: #299B01;
    color: #FFFFFF;
    border-color: transparent;
    cursor: pointer;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;
    &:hover {
        background-color: #FFFFFF;
        color: #299B01;
        border-color: #299B01;
    }
`;

export const ButtonCheckout = ({openItem, setOpenItem}) => {
    return (
        <Button>Add</Button>
    );
};