import styled from "styled-components";

export const Div = styled.div`
  z-index: 1000;
  display: flex;
  position: relative;
  div {
    background-color: rgb(29, 29, 29);
    left: 0;
    top: 0;
    width: 100%;
    border-bottom: 1px solid #fff;
  }
  h1 {
    text-align: center;
    font-family: monospace;
    color: aliceblue;
    font-size: 2.5vw;
    padding: 1%;
  }

  @media (max-width: 600px) {
    h1 {
      padding: 2%;
      font-size: 7vw;
    }
  }
`;
