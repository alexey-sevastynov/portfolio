import React from "react";
import styled from "styled-components";
import AnimationTable from "./AnimationTable";
import SkillsIcons from "./SkillsIcons";

const StyledSkills = styled.div`
  display: flex;
  height: 100vh;
  width: calc(100%); // 20px padding body

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    height: unset;
  }
`;

const Col1 = styled.div`
  position: relative;
  width: 50%;
  @media (max-width: 1300px) {
    width: 60%;
  }

  @media (max-width: 1200px) {
    position: static;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  & svg {
    position: absolute;
    bottom: 0;
    left: 0;
    @media (max-width: 1200px) {
      position: static;
      bottom: unset;
      left: unset;
    }

    @media (max-width: 600px) {
      margin-top: 20px;
      height: 60%;
    }
  }
`;

const Col2 = styled.div`
  width: 50%;
  @media (max-width: 1300px) {
    width: 40%;
  }
  @media (max-width: 1200px) {
    width: 100%;
  }
  /* & h2 {
    margin-top: 65px;
    font-size: 48px;
    @media (max-width: 600px) {
      margin-top: 20px;
      font-size: 20px;
    }
  } */

  & h5 {
    padding-bottom: 20px;
    @media (max-width: 600px) {
      text-align: center;
    }
  }
`;

type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  return (
    <StyledSkills>
      <Col1>
        <AnimationTable />
      </Col1>
      <Col2>
        <h2>What I do</h2>
        <h5>CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</h5>
        <SkillsIcons />
      </Col2>
    </StyledSkills>
  );
};

export default Skills;
