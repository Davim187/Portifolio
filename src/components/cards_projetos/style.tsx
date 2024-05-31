import styled from "styled-components";

export const Div = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 94%;
  justify-content: center;
  padding-left: 2%;

  @media (max-width: 800px) {
    padding-left: 5%;

  }
`;

export const InnerDiv = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

export const DivCard = styled.div`
  border-radius: 5px;
  border: 3px solid;
  margin-left: 25px;
  transition: transform 0.3s ease-in-out;
  margin-top: "64px", // Ajuste a altura conforme necessário
  img {
  }
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 800px) {
    margin: 10px 5px;
  }
`;
export const DivCards = styled.div`
`