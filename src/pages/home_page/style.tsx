import styled, { keyframes } from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const DivLeft = styled.div`
  flex: 1;
  order: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  img {
    z-index: 10;
    max-width: 80%;
    min-width: 40%;
  }

  @media (max-width: 800px) {
    order: 2;
  }
`;

const typing = keyframes`
  0% {
    width: 16ch;
  }
  40% {
    width: 28ch;
  }
  100% {
    width: 28ch;
  }
`;

const blinking = keyframes`
  50% {
    border-color: transparent;
  }
`;

export const DivRight = styled.div`
  order: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  /* background-color: #fff; */
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  width: 100%;
  padding-left: 50%; 
  
  h1, h2 {
    z-index: 10;
    font-family: monospace;
    color: #fff;
  }

  h1 {
    margin: 0 0 5%;
    font-size: 4.5vw;
  }

  h2 {
    margin: 0 0 5%;
    font-size: 2vw;
    white-space: nowrap;
    overflow: hidden;
    border-right: 4px solid;
    width: 28ch;
    animation-delay: 5s;
    animation: ${typing} 4s steps(28) infinite, ${blinking} 0.5s step-end infinite;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 10vw;
    }
    h2 {
      font-size: 4vw;
    }
  }
`;
export const Headers = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f0f8ff6c;
  text-align: center;
  color: aliceblue;
  z-index: 1; 
  padding: 10px 0; 
`;