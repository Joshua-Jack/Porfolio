import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family:'Roboto', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
background-color: #485461;
background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
}
/* overflow: hidden; */
`;

export const backgroundstyle = {
  background: `rgba(239, 242, 243, 1)`,
  height: '100vh',
  // overflow: 'hidden',
};
