import React from "react";

import styled from "styled-components";
import { Theme } from "./styles/theme";
import Header from "./components/Header";
import Cover from "./components/Cover";

// const Background = styled.div`
//   background-color: ${({ theme }) => theme.colors.background};
// `;

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const refHeader = React.useRef(null);

  // const test = refHeader.current.getBoundingClientRect().height;

  console.log(refHeader);

  return (
    <Theme>
      <Header />
      <Cover />
    </Theme>
  );
};

export default App;
