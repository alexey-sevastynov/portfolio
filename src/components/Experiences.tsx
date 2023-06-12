import React from "react";
import styled from "styled-components";
import ExperiencesItem from "./ExperiencesItem";
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

type ExperiencesProps = {};

const Experiences: React.FC<ExperiencesProps> = () => {
  return (
    <StyledExperiences>
      <h2>Experiences</h2>
      <Flex>
        {experiences.map((item, id) => (
          <ExperiencesItem key={id} {...item} />
        ))}
      </Flex>
    </StyledExperiences>
  );
};

export default Experiences;
