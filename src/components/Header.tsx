import React from "react";
import styled from "styled-components";
import LanguageBlock from "./LanguageBlock";
import ModeBlock from "./ModeBlock";
import useScrollDirection from "../hooks/useScrollDirection";
import MenuMobile from "./MenuMobile";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import {
  onBrigthTheme,
  onOpenMenuMobile,
  onOpenPopupLanguage,
} from "../redux/slices/main";
import { motion } from "framer-motion";

const StyledHeader = styled(motion.div)`
  position: sticky;
  top: ${(props) => (props.title === "down" ? "-50px" : "0px")};
  height: 50px;

  transition: top 0.3s ease;

  background-color: ${({ theme }) => theme.colors.background};
  z-index: 3;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1262px) {
    top: ${(props) => (props.title === "down" ? "-100px" : "0px")};
    height: 100px;
    transition: top 0.3s ease;
  }
  @media (max-width: 900px) {
    top: ${(props) => (props.title === "down" ? "-500px" : "0px")};
    height: 50px;
    transition: top 0.3s ease;
  }
`;

const NavMenu = styled.nav`
  z-index: 10;
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
      height: 50px;

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
  display: none;
  height: 50px;

  @media (max-width: 900px) {
    display: flex;
    align-items: center;
  }
`;

const Logo = styled.h5`
  display: block;
  line-height: 50px;

  min-width: 400px;

  @media (max-width: 900px) {
    min-width: 220px;
  }
`;

const MenuBlock = styled.div`
  position: absolute;
  width: 100%;
  top: 50px;
`;

interface HeaderProps {
  refSkills: React.LegacyRef<HTMLDivElement>;
  refEducation: React.LegacyRef<HTMLDivElement>;
  refExperiences: React.LegacyRef<HTMLDivElement>;
  refProjects: React.LegacyRef<HTMLDivElement>;
  refContact: React.LegacyRef<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({
  refSkills,
  refEducation,
  refExperiences,
  refProjects,
  refContact,
}) => {
  const dispatch = useAppDispatch();
  const openMenuMobile = useAppSelector((props) => props.main.openMenuMobile);
  const scrollDirection = useScrollDirection();

  const buttonHandler = (ref: any) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <StyledHeader
      //@ts-ignore
      title={scrollDirection}
    >
      <Logo>{"<Alexey Sevastynov />"}</Logo>

      <NavMenu>
        <ul>
          <li onClick={() => buttonHandler(refSkills)}>Skills</li>
          <li onClick={() => buttonHandler(refEducation)}>Education</li>
          <li onClick={() => buttonHandler(refExperiences)}>
            Work Experiences
          </li>
          <li onClick={() => buttonHandler(refProjects)}>My Projects</li>
          <li onClick={() => buttonHandler(refContact)}>Contact me</li>

          <LanguageBlock />
          <ModeBlock />
        </ul>
      </NavMenu>

      <NavMenuMob>
        <svg
          onClick={() => dispatch(onOpenMenuMobile())}
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1" x2="24" y2="1" stroke="white" strokeWidth="2" />
          <line y1="9" x2="24" y2="9" stroke="white" strokeWidth="2" />
          <line y1="17" x2="24" y2="17" stroke="white" strokeWidth="2" />
        </svg>
      </NavMenuMob>

      {openMenuMobile && (
        <MenuBlock>
          <MenuMobile
            refSkills={refSkills}
            refEducation={refEducation}
            refExperiences={refExperiences}
            refProjects={refProjects}
            refContact={refContact}
          />
        </MenuBlock>
      )}
    </StyledHeader>
  );
};

export default Header;
