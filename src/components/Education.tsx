import React from "react";
import styled from "styled-components";
import EducationItem, { MEducationItem } from "./EducationItem";
import { education } from "../assets/education";
import { motion } from "framer-motion";

const StyledEducation = styled.div`
  height: 100vh;
  width: 100%;
  @media (max-width: 1050px) {
    height: unset;
  }
`;

type EducationProps = {
  refEducation: React.LegacyRef<HTMLDivElement>;
};

const Education: React.FC<EducationProps> = ({ refEducation }) => {
  return (
    <div ref={refEducation}>
      <StyledEducation>
        <h2>Education</h2>

        {education.map((item, id) => (
          <MEducationItem
            key={item.image}
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
            text={item.text}
            variants={containerAnimation}
            initial="hidden"
            whileInView="visible"
            custom={id + 1}
          />
        ))}
      </StyledEducation>
    </div>
  );
};

export default Education;

const containerAnimation = {
  hidden: { opacity: 0, y: 23 },
  visible: (custom: any) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.4 },
  }),
};
