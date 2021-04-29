import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  @font-face {
    font-family: 'Helvetica-Neue-Regular';
    src: local('Helvetica-Neue-Regular'), url(../../../public/fonts/HelveticaNeue-Regular/HelveticaNeue-Regular.ttf) format('ttf');
  }
  @font-face {
    font-family: 'Helvetica-Neue-Bold';
    src: local('Helvetica-Neue-Bold'), url(../../../public/fonts/HelveticaNeue-Bold/HelveticaNeue-Bold.ttf) format('ttf');
  }
  * {
    box-sizing:border-box;
  } 
  body {
    background-color:#E5E5E5;
    font-size: 16px;
    font-family:Helvetica-Neue-Regular,sans-serif;
    line-height: 1.2;
    margin: 0;
    padding: 0;
    color: #232323;
  }
`;
