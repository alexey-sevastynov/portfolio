import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavMenu = styled.nav`
  & ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0px;
    max-width: 850px;

    & li {
      display: flex;
      align-items: center;
      padding: 0px 10px 0px 10px;
      font-size: 20px;
      font-weight: 700;
      height: 50px;

      list-style: none;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundTwo};
      }
    }

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

const NavMenuMob = styled.div`
  & svg {
    display: none;
    height: 50px;

    @media (max-width: 900px) {
      display: block;
    }
  }
`;

const Logo = styled.p`
  display: block;
  line-height: 50px;
  font-size: 32px;
  min-width: 400px;
`;

const Language = styled.div`
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

const ToggleMode = styled.div`
  position: relative;
  margin: 0px 10px 0px 10px;
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

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <Logo>{"<Alexey Sevastynov />"}</Logo>

      <NavMenu>
        <ul>
          <li>Skills</li>
          <li>Education</li>
          <li>Work Experiences</li>
          <li>My Projects</li>
          <li>Contact me</li>
          <Language>
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
              <path
                d="M7 11L0.937823 0.499999L13.0622 0.5L7 11Z"
                fill="#BEBEBE"
              />
            </svg>
          </Language>
          <ToggleMode>
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
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M6.12134 6.12131L4.00002 3.99999"
                  stroke="#FFA800"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M16.0208 6.12131L18.1421 3.99999"
                  stroke="#FFA800"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M11 21V18"
                  stroke="#FFA800"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M18.1421 18.1421L16.0208 16.0208"
                  stroke="#FFA800"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M4 18.1421L6.12132 16.0208"
                  stroke="#FFA800"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M18 10.5H21"
                  stroke="#FFA800"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M1 11H4"
                  stroke="#FFA800"
                  stroke-width="2"
                  stroke-linecap="round"
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
          </ToggleMode>
        </ul>
      </NavMenu>

      <NavMenuMob>
        <svg
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1" x2="24" y2="1" stroke="white" stroke-width="2" />
          <line y1="9" x2="24" y2="9" stroke="white" stroke-width="2" />
          <line y1="17" x2="24" y2="17" stroke="white" stroke-width="2" />
        </svg>
      </NavMenuMob>
    </StyledHeader>
  );
};

export default Header;
