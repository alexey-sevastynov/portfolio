import React from "react";
import styled from "styled-components";
import EducationItem from "./EducationItem";
import { education } from "../assets/education";

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
    </div>
  );
};

export default Education;
