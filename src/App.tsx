import React from "react";

import styled from "styled-components";
import { Theme } from "./styles/theme";
import Header from "./components/Header";

// const Background = styled.div`
//   background-color: ${({ theme }) => theme.colors.background};
// `;

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Theme>
      <Header />
    </Theme>
  );
};

export default App;
