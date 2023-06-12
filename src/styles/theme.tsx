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
    padding: 0px 10px 0px 10px;
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

li {
  font-size: 20px;
  list-style: none;
  font-weight: 700;
  @media (max-width: 900px) {
      font-size: 18px;
     
    }
}

h1 {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 0.2rem;

     @media (max-width: 1200px) {
      font-size: 30px;
    }
     @media (max-width: 600px) {
      letter-spacing: 0.1rem;
      font-size: 22px;
    }
  }

h2 {
    font-size: 48px;
    padding-top: 40px;
    padding-bottom: 30px;
  @media (max-width: 600px) {
      text-align: center;
      padding-top: 20px;
      padding-bottom: 10px;
      font-size: 24px;
    }
}

h3 {
  font-size: 24px;
  font-weight: 700;
   @media (max-width: 600px) {
      font-size: 18px;
    }
}

h4 {
    font-size: 36px;
    font-weight: 700;
    @media (max-width: 600px) {
      font-size: 20px;
    }
}

 h5 {
    font-size: 32px;
    @media (max-width: 600px) {
      font-size: 18px;
    }
  }

h6 {
  font-size: 16px;
}

  

p{
  font-size: 20px;
   @media (max-width: 600px) {
      font-size: 16px;
    }
}

button {
   width: 200px;
  height: 50px;
  background-color: ${
    currentTheme ? theme.colors.backgroundTwo : brigthTheme.colors.backgroundTwo
  };
  border-radius: 10px;
  font-weight: 700;
  font-size: 20px;

  border: none;
  cursor: pointer;

  &:hover {
    border: 1px solid ${
      currentTheme
        ? theme.colors.backgroundTwo
        : brigthTheme.colors.backgroundTwo
    };
    background-color: unset;

    transform: translateY(-3px);
  }

  @media (max-width: 1200px) {
    width: 150px;
    font-size: 16px;
  }
}
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
