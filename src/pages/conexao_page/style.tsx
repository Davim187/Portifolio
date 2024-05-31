import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: hsl(0, 0%, 11.372549019607844%);
  font-family: monospace;
  color: #fff;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
  }
`;

export const Tag = styled.h1`
  margin-top: 10%;
  font-size: 2.5vw;
  text-align: center;
  font-family: monospace;

  @media (max-width: 800px) {
    padding-left: 15%;
    margin: 15% 10% 0 0;
    font-size: 5.5vw;
  }
`;
