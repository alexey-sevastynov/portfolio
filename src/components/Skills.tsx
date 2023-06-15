import React from "react";
import styled from "styled-components";
import AnimationTable from "./AnimationTable";
import SkillsIcons from "./SkillsIcons";
import { motion } from "framer-motion";
import { animateSkillsCol1, animateSkillsCol2 } from "../animateMotion/main";
import { useAppSelector } from "../redux/hook";
import { selectTranslations } from "../redux/slices/i18next";

const StyledSkills = styled.div`
  display: flex;
  height: 100vh;
  width: calc(100%); // 20px padding body

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    height: unset;
  }
`;

const Col1 = styled(motion.div)`
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

const Col2 = styled(motion.div)`
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

type SkillsProps = {
  refSkills: React.LegacyRef<HTMLDivElement>;
};

const Skills: React.FC<SkillsProps> = ({ refSkills }) => {
  const lang = useAppSelector(selectTranslations);
  return (
    <div ref={refSkills}>
      <StyledSkills>
        <Col1
          variants={animateSkillsCol1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <AnimationTable />
        </Col1>
        <Col2
          variants={animateSkillsCol2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2>{lang.skills.title}</h2>
          <h5>{lang.skills.subTitle}</h5>
          <SkillsIcons />
        </Col2>
      </StyledSkills>
    </div>
  );
};

export default Skills;
