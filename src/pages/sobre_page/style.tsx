import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin-top:5%;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    padding-top: 37%;
  }
`;

