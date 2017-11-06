import { injectGlobal } from 'styled-components';
import AvenirBook from '!file-loader!./assets/fonts/AvenirLTStd-Book.otf';
import AvenirLight from '!file-loader!./assets/fonts/AvenirLTStd-Light.otf';
import AvenirRoman from '!file-loader!./assets/fonts/AvenirLTStd-Roman.otf';
import AntroVectra from '!file-loader!./assets/fonts/Antro_Vectra.otf';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: AvenirBook;
    src: url(${AvenirBook});
  }
  @font-face {
    font-family: AvenirLight;
    src: url(${AvenirLight});
  }
  @font-face {
    font-family: AvenirRoman;
    src: url(${AvenirRoman});
  }
  /* Fuente para el banner */
  @font-face {
    font-family: AntroVectra;
    src: url(${AntroVectra});
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  /* xsmall-0 */
  @media screen and (max-width: 480px) {
  }
  /* xsmall-1 */
  @media screen and (max-width: 600px) and (min-width: 481px) {
  }
  /* small-0 */
  @media screen and (max-width: 840px) and (min-width: 601px) {
  }
  /* small-1 */
  @media screen and (max-width: 960px) and (min-width: 841px) {
    body {
    }
  }
  /* medium */
  @media screen and (max-width: 1280px) and (min-width: 961px) {
    body {
      padding-top: 127.75px;
    }  
  }
  /* large-0 */
  @media screen and (max-width: 1440px) and (min-width: 1281px) {
    body {
      padding-top: 132.75px;
    }  
  }
  /* large-1 */
  @media screen and (max-width: 1600px) and (min-width: 1441px) {
    body{
      padding-top: 136px;
    }
  }
  /* large-2 */
  @media screen and (max-width: 1920px) and (min-width: 1601px) {
    body{
      padding-top: 146px;
    }
  }
  /* xlarge */
  @media screen and (min-width: 1921px) {
  }
`;
