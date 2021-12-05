import React from "react";
import styled from "styled-components";
import logoImg from '../images/logo.svg';
import logInImg from '../images/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    padding: 16px;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #299B01;
    color: #FFFFFF;
    box-shadow: 4px 4px 5px rgba(0,0,0,0.2);
    z-index: 3;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    margin-left: 16px;
    font-size: 24px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const ButtonStyled = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    background-color: #299B01;
    color: #FFFFFF;
`;

const BtnImg = styled.img`
    margin-bottom: 4px;
    width: 32px;
`;

export const NavBar = () => {
    return (
        <NavBarStyled>
            <Logo>
                <ImgLogo src={logoImg} alt="logo"/>
                <H1>MrDonald's</H1>
            </Logo>  
            <ButtonStyled>
                <BtnImg src={logInImg} alt="logIn" />
                Log In
            </ButtonStyled>
        </NavBarStyled>
    )
}