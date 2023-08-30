import React from "react";

import * as Style from "./styles";
import { Theme } from "../styles/theme";

import Header from "../components/Header/Header";
import Cover from "../components/Cover";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

import useScrollUp from "../hooks/useScrollUp";
import { showUpWindow } from "../helpers/showUpWindow";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const scrollUp = useScrollUp();

  const refSkills = React.useRef(null);
  const refEducation = React.useRef(null);
  const refExperiences = React.useRef(null);
  const refProjects = React.useRef(null);
  const refContact = React.useRef(null);

  return (
    <Theme>
      <Header
        refSkills={refSkills}
        refEducation={refEducation}
        refExperiences={refExperiences}
        refProjects={refProjects}
        refContact={refContact}
      />
      <div className="wrapper">
        <Cover refContact={refContact} />
        <Skills refSkills={refSkills} />
        <Education refEducation={refEducation} />
        <Experiences refExperiences={refExperiences} />
        <Projects refProjects={refProjects} />
        <Contact refContact={refContact} />
        {!scrollUp && (
          <Style.UpScreen>
            <svg
              onClick={() => showUpWindow()}
              width="50"
              height="60"
              viewBox="0 0 50 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="50" height="60" rx="12" fill="#568ED5" />
              <path
                d="M20 18.5V26C18 25 16.3771 24.6844 15.5 26C14.5 27.5 17 29.5 17.5 30L18.5 31C18.8333 31.5 19.6 32.8 20 34C20.4 35.2 22.1667 36.1667 23 36.5H28C30 36.5 31.5 36.5 32.5 35.5L33.5 33.5C34 31 34.1 32.6 34.5 29C34.9 25.4 32.3333 24.8333 31 25C31 23.8 29 23.8333 28 24C27.6 23.2 25.5 23.3333 24.5 23.5V18.5C23 15 20.5 17 20 18.5Z"
                fill="white"
              />
              <rect x="21" y="37" width="12" height="5" rx="1" fill="white" />
              <circle cx="31" cy="39" r="1" fill="#568ED5" />
            </svg>
          </Style.UpScreen>
        )}
      </div>
    </Theme>
  );
};

export default App;
