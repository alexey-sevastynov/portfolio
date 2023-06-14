import React from "react";
import styled from "styled-components";
import ExperiencesItem, { MExperiencesItem } from "./ExperiencesItem";
import { experiences } from "../assets/experiences";

const StyledExperiences = styled.div`
  height: 100vh;

  @media (max-width: 1050px) {
    height: unset;
  }

  /* & h2 {
    margin-top: 65px;
    margin-bottom: 40px;
    font-size: 48px;
  } */
`;

const Flex = styled.div`
  display: flex;

  @media (max-width: 1050px) {
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
  }
`;

type ExperiencesProps = {
  refExperiences: React.LegacyRef<HTMLDivElement>;
};

const Experiences: React.FC<ExperiencesProps> = ({ refExperiences }) => {
  return (
    <div ref={refExperiences}>
      <StyledExperiences>
        <h2>Experiences</h2>
        <Flex>
          {experiences.map((item, id) => (
            <MExperiencesItem
              key={id}
              {...item}
              variants={containerAnimation}
              initial="hidden"
              whileInView="visible"
              custom={id + 1}
            />
          ))}
        </Flex>
      </StyledExperiences>
    </div>
  );
};

export default Experiences;

const containerAnimation = {
  hidden: { opacity: 0 },
  visible: (custom: any) => ({
    opacity: 1,

    transition: { delay: custom * 0.4, duration: 1 },
  }),
};
