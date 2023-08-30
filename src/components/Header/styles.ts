import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeader = styled(motion.div)`
  padding: 0px 20px;
  position: sticky;
  top: ${(props) => (props.title === "down" ? "-80px" : "0px")};
  height: 80px;

  transition: top 0.3s ease;

  background-color: ${({ theme }) => theme.colors.background};

  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1262px) {
    top: ${(props) => (props.title === "down" ? "-100px" : "0px")};
    height: 100px;
    transition: top 0.3s ease;
  }
  @media (max-width: 900px) {
    top: ${(props) => (props.title === "down" ? "-700px" : "0px")};
  }
`;

export const NavMenu = styled.nav`
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

export const NavMenuMob = styled.div`
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

export const Logo = styled.h5`
  display: block;
  line-height: 50px;

  min-width: 400px;

  cursor: pointer;

  @media (max-width: 900px) {
    min-width: 220px;
  }
`;

export const MenuBlock = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 100px;
`;
