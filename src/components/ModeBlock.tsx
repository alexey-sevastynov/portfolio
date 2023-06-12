import React from "react";
import styled from "styled-components";

const StyledModeBlock = styled.div`
  position: relative;
  margin: 13px 10px 13px 10px;
  width: 50px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.backgroundTwo};
  border-radius: 100px;

  cursor: pointer;

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 100%;

    &:nth-child(2) {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`;

interface ModeBlockProps {}

const ModeBlock: React.FC<ModeBlockProps> = () => {
  return (
    <StyledModeBlock>
      <span>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="5" fill="#FFA800" />
          <path
            d="M11 4V1"
            stroke="#FFA800"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6.12134 6.12131L4.00002 3.99999"
            stroke="#FFA800"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16.0208 6.12131L18.1421 3.99999"
            stroke="#FFA800"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M11 21V18"
            stroke="#FFA800"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18.1421 18.1421L16.0208 16.0208"
            stroke="#FFA800"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 18.1421L6.12132 16.0208"
            stroke="#FFA800"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18 10.5H21"
            stroke="#FFA800"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M1 11H4"
            stroke="#FFA800"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span>
        <svg
          width="16"
          height="19"
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 18C-4.49992 23.5 -2.49999 0.5 10.0001 0C8.0001 3 5.90017 7.3 7.5001 8.5C9.10004 9.7 10.1667 10.3333 10.5001 10.5L8.0001 11C8.0001 12.5 10.3999 15.2 16 18Z"
            fill="#FFA800"
          />
          <circle cx="5" cy="7" r="1" fill="black" />
          <path d="M9 13C8.5 13.5 7 14.2 5 13" stroke="black" />
        </svg>
      </span>
    </StyledModeBlock>
  );
};

export default ModeBlock;
