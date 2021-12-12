import React from "react";
import styled from "styled-components";

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Counter = styled.div`
    display: flex;
    align-items: center;
`;

const CountInput = styled.input`
    width: 50px;
    font-size: 20px;
    height: 30px;
    text-align: center;
    border: 1px solid #299B01;
    border-left: none;
    border-right: none;
`;

const ButtonCount = styled.button`
    height: 30px;
    width: 30px;
    margin: 0;
    padding: 0;
    font-size: 16px;
    background-color: transparent;
    border: 1px solid #299B01;
    color: #299B01;
    &:disabled {
      color: #CCCCCC;
    }
`;

export const CountItem = ({count, setCount, onChange}) => {
  const increaseCount = () => {
    const val = count + 1;
    setCount(val > 100 ? 100 : val);
  }
  const decreaseCount = () => {
    const val = count - 1;
    setCount(val < 1 ? 1 : val);
  }
  return (
    <CountWrapper>
      <span>Quantity</span>
      <Counter>
        <ButtonCount disabled={count <= 1} onClick={() => decreaseCount()}>-</ButtonCount>
        <CountInput value={count} type="number" min="1" max="100" onChange={onChange} />
        <ButtonCount disabled={count >= 100} onClick={() => increaseCount()}>+</ButtonCount>
      </Counter>
    </CountWrapper>
  );
};