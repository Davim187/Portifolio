import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  width: 100vw;
  height: 100vw;
  background-color: hsl(0, 0%, 11.372549019607844%);
  font-family: monospace;
  color: #fff;
  flex-direction: column;

  div {
    z-index: 0;
  }
`;
export const Tag = styled.h1`
  margin-top: 20%;
  font-size: 2.5vw;
  text-align: center;
  font-family: monospace;

  @media (max-width: 800px) {
    padding-left: 15%;
    margin: 15% 10% 0 0;
    font-size: 5.5vw;
  }
`;
