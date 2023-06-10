import React from "react";

import styled from "styled-components";
import { Theme } from "./styles/theme";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Skills from "./components/Skills";
import Education from "./components/Education";

// const Background = styled.div`
//   background-color: ${({ theme }) => theme.colors.background};
// `;

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Theme>
      <Header />
      <Cover />
      <Skills />
      <Education />
    </Theme>
  );
};

export default App;
