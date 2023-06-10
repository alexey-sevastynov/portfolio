import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ITheme } from "../interfaces/styled";

const currentTheme = 1; // 0 - brightTheme

const theme: ITheme = {
  colors: {
    text: "white",
    background: "#26365F",
    backgroundTwo: "#568ED5",
    border: "white",
    lightGrey: "#BEBEBE",
  },
};

const brigthTheme: ITheme = {
  colors: {
    text: "black",
    background: "white",
    backgroundTwo: "#568ED5",
    border: "black",
    lightGrey: "#BEBEBE",
  },
};

const GlobalStyle = createGlobalStyle`
body{
    padding: 10px 10px 0px 10px;
    background-color: ${
      currentTheme ? theme.colors.background : brigthTheme.colors.background
    };
    max-width: 1440px;
    margin: 0 auto;
};
* {
    margin: 0px;
    font-family: 'Jura', sans-serif;
    font-weight: 300;
    color: ${currentTheme ? theme.colors.text : brigthTheme.colors.text};
};
`;

interface ThemeProps {
  children: any;
}

export const Theme: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={currentTheme ? theme : brigthTheme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
};
