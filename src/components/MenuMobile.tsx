import React from "react";
import styled from "styled-components";
import LanguageBlock from "./LanguageBlock";
import ModeBlock from "./ModeBlock";

const StyledMenuBobile = styled.div`
  position: sticky;
  top: 50px;
  width: 100%;
  height: 450px;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 2;

  & ul {
    padding: 0;
  }

  & li {
    margin-top: 30px;
    &:first-child {
      margin-top: 0;
    }
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

const Footer = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 20px);
`;

interface MenuMobileProps {}

const MenuMobile: React.FC<MenuMobileProps> = () => {
  return (
    <StyledMenuBobile>
      <nav>
        <ul>
          <li>Skills</li>
          <li>Education</li>
          <li>Work Experiences</li>
          <li>My Projects</li>
          <li>Contact me</li>
          <Footer>
            <ModeBlock />
            <LanguageBlock />
          </Footer>
        </ul>
      </nav>
    </StyledMenuBobile>
  );
};

export default MenuMobile;
