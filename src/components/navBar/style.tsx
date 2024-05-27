import styled from "styled-components";

export const Div = styled.div`
  z-index: 100;
  display: flex;
  div {
    z-index: 10;
    background-color: rgb(29, 29, 29);
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    border-bottom: 1px solid #fff;
  }
  h1 {
    text-align: center;
    font-family: monospace;
    color: aliceblue;
    font-size: 2.5vw;
    padding: 1%;
  }
  
  @media (max-width: 800px) {
    h1 {
      padding: 2%;
      font-size: 7vw;
    }
  }
`;
