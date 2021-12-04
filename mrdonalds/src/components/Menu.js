import React from "react";
import styled from "styled-components";
import dbMenu from "./DBMenu";
import { ListItem } from "./ListItem";

const MenuStyled = styled.main`
    margin-top: 80px;
    background-color: #CCCCCC;
`;

const Section = styled.section`
    padding: 15px;
`;

const Banner = styled.div`
    height: 210px;
    background-image: ${({img}) => `url(${img})`};
    background-position: center;
    background-size: cover;
`;

export const Menu = () => {
    return (
        <MenuStyled>
            <Banner img={'./banner.png'}/>
            <Section>
                <h2>Burgers</h2>
                <ListItem itemList={dbMenu.burger} />
            </Section>
            <Section>
                <h2>Other</h2>
                <ListItem itemList={dbMenu.other} />
            </Section>
        </MenuStyled>
    )
}