import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 5%;
  width: 100vw;
  justify-content: center;
  
  @media (max-width: 800px) {
    padding-left: 10%;

  }
`;

export const InnerDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

export const DivCards = styled.div`
  background-color: #626262;
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 0 25%;
  border: 3px solid  rgba(0, 68, 255, 0.767);
  width: 70px;
  height: 70px;
  text-align: center;
  font-size: 7px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  svg{
    font-size: 70px;
  }
  &:hover{
    transform: scale(1.1);
  }

  @media (max-width: 800px) {
    margin: 10px 5px;

  }
`;
