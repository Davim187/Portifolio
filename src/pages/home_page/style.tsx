import styled, { keyframes } from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  margin-top:5%;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    padding-top: 37%;
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
    max-width: 60%;
    min-width: 40%;
  }

  @media (max-width: 800px) {
    order: 2;
    img{
    max-width: 75%;
    }

  }
`;

const typing = keyframes`
  0% {
    width: 0ch;
  }
  40% {
    width: 12ch;
  }
  100% {
    width: 12ch;
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
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  font-family: monospace;
  margin-top:10%;
  

  h1 {
    z-index: 10;
    font-family: monospace;
    color: #fff;
    font-size: 3vw;
    padding:0 0 2% 21%;
  }

  h2 {
    z-index: 10;
    color: rgb(0, 68, 255);
    padding-left: 21%;
    margin: 0 0 5%;
    font-size: 3vw;
    white-space: nowrap;
    overflow: hidden;
    border-right: 4px solid;
    width: 15ch;
    animation-delay: 5s;
    animation: ${typing} 4s steps(15) infinite, ${blinking} 0.5s step-end infinite;
  }

  @media (max-width: 800px) {
    margin-top:2%;
    h1 {
      font-size: 10vw;
      font-size: 6vw;
      padding-left: 23%;
    }
    h2 {
      padding-left: 35%;
      font-size: 4.5vw;
    }
  }
`;

