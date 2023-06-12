import React from "react";
import styled from "styled-components";
import LanguageBlock from "./LanguageBlock";
import ModeBlock from "./ModeBlock";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { onOpenMenuMobile } from "../redux/slices/main";

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

interface MenuMobileProps {
  refSkills: React.LegacyRef<HTMLDivElement>;
  refEducation: React.LegacyRef<HTMLDivElement>;
  refExperiences: React.LegacyRef<HTMLDivElement>;
  refProjects: React.LegacyRef<HTMLDivElement>;
  refContact: React.LegacyRef<HTMLDivElement>;
}

const MenuMobile: React.FC<MenuMobileProps> = ({
  refSkills,
  refEducation,
  refExperiences,
  refProjects,
  refContact,
}) => {
  const dispatch = useAppDispatch();
  const openMenuMobile = useAppSelector((props) => props.main.openMenuMobile);
  const buttonHandler = (ref: any) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
    if (openMenuMobile) {
      dispatch(onOpenMenuMobile());
    }
  };

  return (
    <StyledMenuBobile>
      <nav>
        <ul>
          <li onClick={() => buttonHandler(refSkills)}>Skills</li>
          <li onClick={() => buttonHandler(refEducation)}>Education</li>
          <li onClick={() => buttonHandler(refExperiences)}>
            Work Experiences
          </li>
          <li onClick={() => buttonHandler(refProjects)}>My Projects</li>
          <li onClick={() => buttonHandler(refContact)}>Contact me</li>
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
