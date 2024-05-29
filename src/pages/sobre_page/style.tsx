import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: hsl(0, 0%, 11.372549019607844%);
  font-family: monospace;
  color: #fff;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    margin-top: 11%;
    font-size: 2.5vw;
  }
  h3 {
    margin: 5% 10%;
    font-size: 1.2vw;
  }
  @media (max-width: 600px) {
    h1 {
      margin-top: 35%;
      font-size: 6.5vw;
    }
    h3 {
    margin: 5% 10%;
    font-size: 3.5vw;
  }
  }
`;
