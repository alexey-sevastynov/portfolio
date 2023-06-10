import React from "react";
import styled from "styled-components";
import AnimationTable from "./AnimationTable";
import SkillsIcons from "./SkillsIcons";

const StyledSkills = styled.div`
  display: flex;
  height: 100vh;
  width: calc(100% - 20px); // 20px padding body
`;

const Col1 = styled.div`
  position: relative;
  width: 50%;

  & svg {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const Col2 = styled.div`
  width: 50%;

  & h2 {
    margin-top: 65px;
    font-size: 48px;
  }

  & p {
    margin: 20px 0px;
    font-size: 32px;
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
        <p>CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
        <SkillsIcons />
      </Col2>
    </StyledSkills>
  );
};

export default Skills;
