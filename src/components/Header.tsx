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
import { selectTranslations } from "../redux/slices/i18next";

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
    max-width: 900px;

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
    & svg {
      & path {
        fill: ${({ theme }) => theme.colors.border};
      }
      & rect {
        fill: ${({ theme }) => theme.colors.border};
        transition: all 0.3s ease;
      }
    }
  }
`;

const Logo = styled.h5`
  display: block;
  line-height: 50px;

  min-width: 400px;

  cursor: pointer;

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
  const lang = useAppSelector(selectTranslations);
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
      <Logo onClick={() => buttonHandler(refContact)}>
        {"<Alexey Sevastynov />"}
      </Logo>

      <NavMenu>
        <ul>
          <li onClick={() => buttonHandler(refSkills)}>{lang.header.skills}</li>
          <li onClick={() => buttonHandler(refEducation)}>
            {lang.header.education}
          </li>
          <li onClick={() => buttonHandler(refExperiences)}>
            {lang.header.work}
          </li>
          <li onClick={() => buttonHandler(refProjects)}>
            {lang.header.projects}
          </li>
          <li onClick={() => buttonHandler(refContact)}>
            {lang.header.contact}
          </li>

          <LanguageBlock />
          <ModeBlock />
        </ul>
      </NavMenu>

      <NavMenuMob>
        <svg
          onClick={() => dispatch(onOpenMenuMobile())}
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {openMenuMobile ? (
            <rect
              x="2.82843"
              width="30"
              height="4"
              rx="1"
              transform="rotate(45 2.82843 0)"
              fill="black"
            />
          ) : (
            <rect width="24" height="4" rx="1" fill="black" />
          )}
          {openMenuMobile ? (
            <rect
              x="-1.52588e-05"
              y="21.2132"
              width="30"
              height="4"
              rx="1"
              transform="rotate(-45 -1.52588e-05 21.2132)"
              fill="black"
            />
          ) : (
            <rect width="24" height="4" rx="1" fill="black" />
          )}
          {openMenuMobile ? null : (
            <g>
              <rect width="24" height="4" rx="1" fill="black" />
              <rect y="10" width="24" height="4" rx="1" fill="black" />
            </g>
          )}

          {openMenuMobile ? null : (
            <path
              d="M1.23668 21.2109V23.2993H1.48961C1.65823 23.2993 1.77786 23.3324 1.8485 23.3984C1.92141 23.4622 1.95787 23.5465 1.95787 23.6514C1.95787 23.7539 1.92141 23.8382 1.8485 23.9043C1.77786 23.9681 1.65823 24 1.48961 24H0.570176C0.401556 24 0.281927 23.9681 0.211289 23.9043C0.138373 23.8382 0.101914 23.7528 0.101914 23.6479C0.101914 23.5454 0.137233 23.4622 0.207871 23.3984C0.278509 23.3324 0.387884 23.2993 0.535996 23.2993V20.5581C0.41295 20.5467 0.319525 20.5091 0.255723 20.4453C0.1942 20.3815 0.163438 20.3018 0.163438 20.2061C0.163438 20.1012 0.198757 20.0169 0.269395 19.9531C0.342312 19.887 0.46308 19.854 0.6317 19.854L1.40074 19.8574L2.35436 21.9663L3.29088 19.854L4.06676 19.8574C4.23538 19.8574 4.35501 19.8893 4.42564 19.9531C4.49856 20.0169 4.53502 20.1012 4.53502 20.2061C4.53502 20.3018 4.50312 20.3815 4.43932 20.4453C4.37551 20.5091 4.28323 20.5467 4.16246 20.5581V23.2993C4.31057 23.2993 4.41995 23.3324 4.49059 23.3984C4.56122 23.4645 4.59654 23.5488 4.59654 23.6514C4.59654 23.7539 4.56008 23.8382 4.48717 23.9043C4.41653 23.9681 4.2969 24 4.12828 24H3.20543C3.03909 24 2.91946 23.9681 2.84654 23.9043C2.77591 23.8382 2.74059 23.7528 2.74059 23.6479C2.74059 23.5454 2.77591 23.4622 2.84654 23.3984C2.91946 23.3324 3.03909 23.2993 3.20543 23.2993H3.46178V21.2109L2.65856 23.0156H2.05016L1.23668 21.2109ZM8.05676 22.2705V23.2993H9.84436V22.9199C9.84436 22.7513 9.87626 22.6317 9.94006 22.561C10.0061 22.4881 10.0916 22.4517 10.1964 22.4517C10.2989 22.4517 10.3821 22.4881 10.4459 22.561C10.512 22.6317 10.545 22.7513 10.545 22.9199V24H7.2467C7.07808 24 6.95731 23.9681 6.88439 23.9043C6.81376 23.8382 6.77844 23.7528 6.77844 23.6479C6.77844 23.5454 6.8149 23.4622 6.88781 23.3984C6.96073 23.3324 7.08036 23.2993 7.2467 23.2993H7.35607V20.5581H7.2467C7.07808 20.5581 6.95731 20.5262 6.88439 20.4624C6.81376 20.3963 6.77844 20.3109 6.77844 20.2061C6.77844 20.1012 6.81376 20.0169 6.88439 19.9531C6.95731 19.887 7.07808 19.854 7.2467 19.854L10.3912 19.8574V20.9238C10.3912 21.0902 10.3593 21.2098 10.2955 21.2827C10.2317 21.3534 10.1474 21.3887 10.0426 21.3887C9.93778 21.3887 9.85233 21.3534 9.78625 21.2827C9.72245 21.2121 9.69055 21.0924 9.69055 20.9238V20.5581H8.05676V21.5698H8.67199C8.67199 21.3875 8.68908 21.2702 8.72326 21.2178C8.7939 21.1061 8.89416 21.0503 9.02404 21.0503C9.12658 21.0503 9.20975 21.0868 9.27355 21.1597C9.33964 21.2303 9.37268 21.3499 9.37268 21.5186V22.3252C9.37268 22.4779 9.35445 22.5804 9.31799 22.6328C9.24507 22.7399 9.14709 22.7935 9.02404 22.7935C8.89416 22.7935 8.7939 22.7376 8.72326 22.626C8.68908 22.5736 8.67199 22.4551 8.67199 22.2705H8.05676ZM14.3436 21.1802V23.2993H14.5966C14.7652 23.2993 14.8848 23.3324 14.9554 23.3984C15.0284 23.4622 15.0648 23.5465 15.0648 23.6514C15.0648 23.7539 15.0284 23.8382 14.9554 23.9043C14.8848 23.9681 14.7652 24 14.5966 24H13.6771C13.5085 24 13.3877 23.9681 13.3148 23.9043C13.2442 23.8382 13.2089 23.7528 13.2089 23.6479C13.2089 23.5477 13.2442 23.4645 13.3148 23.3984C13.3855 23.3324 13.4948 23.2993 13.6429 23.2993V20.5581H13.5336C13.365 20.5581 13.2442 20.5262 13.1713 20.4624C13.1006 20.3963 13.0653 20.3109 13.0653 20.2061C13.0653 20.1012 13.1006 20.0169 13.1713 19.9531C13.2442 19.887 13.365 19.854 13.5336 19.854L14.3436 19.8574L16.1346 22.667V20.5581H15.8817C15.7131 20.5581 15.5923 20.5262 15.5194 20.4624C15.4488 20.3963 15.4135 20.3109 15.4135 20.2061C15.4135 20.1012 15.4488 20.0169 15.5194 19.9531C15.5923 19.887 15.7131 19.854 15.8817 19.854L16.8012 19.8574C16.9698 19.8574 17.0894 19.8893 17.16 19.9531C17.233 20.0169 17.2694 20.1012 17.2694 20.2061C17.2694 20.3086 17.2341 20.3929 17.1635 20.459C17.0928 20.5251 16.9846 20.5581 16.8387 20.5581V24H16.1449L14.3436 21.1802ZM23.2658 20.5581V22.5439C23.2658 22.9769 23.1097 23.3449 22.7975 23.6479C22.4876 23.951 22.1139 24.1025 21.6764 24.1025C21.4599 24.1025 21.256 24.0649 21.0646 23.9897C20.8755 23.9123 20.7046 23.7995 20.5519 23.6514C20.4015 23.5033 20.2842 23.3494 20.1998 23.1899C20.1155 23.0282 20.0734 22.8128 20.0734 22.5439V20.5581C19.9253 20.5581 19.8159 20.5251 19.7453 20.459C19.6746 20.3929 19.6393 20.3086 19.6393 20.2061C19.6393 20.1012 19.6746 20.0169 19.7453 19.9531C19.8159 19.8893 19.9367 19.8574 20.1076 19.8574L21.027 19.854C21.1956 19.854 21.3152 19.887 21.3859 19.9531C21.4588 20.0169 21.4953 20.1012 21.4953 20.2061C21.4953 20.3109 21.4588 20.3963 21.3859 20.4624C21.3152 20.5262 21.1956 20.5581 21.027 20.5581H20.7741V22.6055C20.7741 22.8151 20.8607 23.0008 21.0338 23.1626C21.2093 23.3221 21.4201 23.4019 21.6662 23.4019C21.8302 23.4019 21.984 23.3631 22.1276 23.2856C22.2711 23.2082 22.3885 23.0954 22.4796 22.9473C22.5366 22.8538 22.5651 22.7399 22.5651 22.6055V20.5581H22.3121C22.1435 20.5581 22.0228 20.5262 21.9498 20.4624C21.8792 20.3963 21.8439 20.3109 21.8439 20.2061C21.8439 20.1012 21.8792 20.0169 21.9498 19.9531C22.0228 19.887 22.1435 19.854 22.3121 19.854L23.2316 19.8574C23.4002 19.8574 23.5198 19.8893 23.5905 19.9531C23.6634 20.0169 23.6998 20.1012 23.6998 20.2061C23.6998 20.3086 23.6645 20.3929 23.5939 20.459C23.5232 20.5251 23.4139 20.5581 23.2658 20.5581Z"
              fill="black"
            />
          )}
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
