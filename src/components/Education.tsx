import React from "react";
import styled from "styled-components";
import EducationItem from "./EducationItem";
import { education } from "../assets/education";

const StyledEducation = styled.div`
  height: 100vh;

  & h2 {
    margin-top: 65px;
    margin-bottom: 40px;
    font-size: 48px;
  }
`;

type EducationProps = {};

const Education: React.FC<EducationProps> = () => {
  return (
    <StyledEducation>
      <h2>Education</h2>

      {education.map((item) => (
        <EducationItem
          key={item.image}
          image={item.image}
          title={item.title}
          subTitle={item.subTitle}
          text={item.text}
        />
      ))}
    </StyledEducation>
  );
};

export default Education;
