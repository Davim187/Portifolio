import styled, { keyframes } from "styled-components";

interface Props {
  nameButton: string;
}

const gradientAnimation = keyframes`
  0% {
    border-color: #fff;
  }
  100% {
    border-color: rgba(0, 68, 255, 0.767);
  }
`;

export const StyledButton = styled.button<Props>`
  background-color: hsl(0, 0%, 11.372549019607844%);
  color: #fff;
  padding: 10px 60px;
  border-radius: 20px;
  border: 1px solid #fff;
  cursor: pointer;

  &:hover {
    animation: ${gradientAnimation} 1.5s forwards;
  }
`;
