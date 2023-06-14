import React from "react";
import styled from "styled-components";

import ProjectsItem, { MProjectsItem } from "./ProjectsItem";
import { projects } from "../assets/projects";
import Button from "./Button";

const StyledProjects = styled.div`
  height: 100vh;

  @media (max-width: 1400px) {
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
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 10px;

  row-gap: 25px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const ButtonBlock = styled.div`
  margin-top: 32px;
  text-align: center;
`;

interface ProjectsProps {
  refProjects: React.LegacyRef<HTMLDivElement>;
}

const Projects: React.FC<ProjectsProps> = ({ refProjects }) => {
  return (
    <div ref={refProjects}>
      <StyledProjects>
        <h2>My Projects</h2>
        <Flex>
          {projects.map((item, id) => (
            <MProjectsItem
              key={id}
              {...item}
              variants={containerAnimation}
              initial="hidden"
              whileInView="visible"
              custom={id + 1}
            />
          ))}
        </Flex>
        <ButtonBlock>
          <Button text="MORE PROJECTS" />
        </ButtonBlock>
      </StyledProjects>
    </div>
  );
};

export default Projects;

const containerAnimation = {
  hidden: { opacity: 0, y: 23 },
  visible: (custom: any) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.4 },
  }),
};
