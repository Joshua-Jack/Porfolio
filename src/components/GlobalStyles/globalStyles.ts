import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family:'Roboto', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
background-color: rgba(255, 255, 255, 0.549782);
background-image: linear-gradient(237.02deg, rgba(255, 255, 255, 0.549782) -8.66%, rgba(96, 101, 255, 0.529928) 149.42%, rgba(96, 101, 255, 0.430329) 149.42%) ;
/* background-image: linear-gradient(315deg, #485461 0%, #28313b 74%); */
}
/* overflow: hidden; */
`;

export const backgroundstyle = {
  background: `rgba(239, 242, 243, 1)`,
  height: '100vh',
  // overflow: 'hidden',
};
