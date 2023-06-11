import React from "react";
import styled from "styled-components";

import ProjectsItem from "./ProjectsItem";
import { projects } from "../assets/projects";
import Button from "./Button";

const StyledProjects = styled.div`
  height: 100vh;

  & h2 {
    margin-top: 65px;
    margin-bottom: 40px;
    font-size: 48px;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  row-gap: 25px;
`;

const ButtonBlock = styled.div`
  margin-top: 32px;
  text-align: center;
`;

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <StyledProjects>
      <h2>My Projects</h2>
      <Flex>
        {projects.map((item, id) => (
          <ProjectsItem key={id} {...item} />
        ))}
      </Flex>
      <ButtonBlock>
        <Button text="MORE PROJECTS" />
      </ButtonBlock>
    </StyledProjects>
  );
};

export default Projects;
