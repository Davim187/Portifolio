import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: hsl(0, 0%, 11.372549019607844%);
  overflow: hidden; 
  z-index: 0;
  justify-content: center;

  @media (max-width: 800px) {
    justify-content: flex-start;

}
`;
export const Div = styled.div`
  svg {
    font-size: 80%;
    color: rgba(0, 0, 0, 0.5);
    padding: 0 2px;
    transition: 1s;
    user-select: none;
    cursor: default;
  }

  svg:hover {
    transition: 0s;
    color: rgba(0, 68, 255, 0.767);
    text-shadow: 0 0 120px rgba(0, 68, 255, 0.767);
  }
`;

export const DivMainBack = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  padding: 10px;
  white-space: nowrap;
  font-size: 55px;
  transform: rotate(-17deg);
  bottom: 35%;
  right: 5%;
`;
