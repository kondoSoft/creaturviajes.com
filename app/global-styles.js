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
  h1{
    font-family: AntroVectra;
  }
  body {
    background-color:  #f5f4f4;
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
`;
