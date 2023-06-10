import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.backgroundTwo};
  border-radius: 10px;
  font-weight: 700;
  font-size: 20px;

  border: none;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.backgroundTwo};
    background-color: unset;

    transform: translateY(-3px);
  }
`;

type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
