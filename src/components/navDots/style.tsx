import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;


export const NavDotsDiv = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  `;

interface DotProps {
  active: boolean;
}

export const Dot = styled.div<DotProps>`
  width: 12px;
  height: 12px;
  margin: 5px 0;
  border-radius: 50%;
  background-color: ${props => (props.active ? 'black' : 'grey')};
  transition: background-color 0.3s;
  border: 1px solid rgba(0, 68, 255, 0.548) ;
  `;
