import React from "react";
import styled from "styled-components";

const StyledLanguageBlock = styled.div`
  font-weight: 700;
  margin: 0px 20px 0px 10px;
  padding: 0px 10px 0px 10px;
  display: flex;
  flex-direction: row;
  position: relative;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }

  & svg {
    margin-left: 5px;
  }
`;

const LanguagePopup = styled.div`
  position: absolute;
  top: 100%;
  right: 7px;
  background-color: ${({ theme }) => theme.colors.backgroundTwo};
  padding: 5px 20px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;

  & p {
    background-color: ${({ theme }) => theme.colors.backgroundTwo};
    color: ${({ theme }) => theme.colors.border};

    &:nth-child(1) {
      font-weight: 700;
    }
  }
`;

interface LanguageBlockProps {}

const LanguageBlock: React.FC<LanguageBlockProps> = () => {
  return (
    <StyledLanguageBlock>
      EN
      <LanguagePopup>
        <p>EN</p>
        <p>EN</p>
        <p>RU</p>
      </LanguagePopup>
      <svg
        width="14"
        height="11"
        viewBox="0 0 14 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 11L0.937823 0.499999L13.0622 0.5L7 11Z" fill="#BEBEBE" />
      </svg>
    </StyledLanguageBlock>
  );
};

export default LanguageBlock;
