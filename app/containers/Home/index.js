/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { defaultAction } from './actions';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';

import Menu from '../../components/Menu';
import BannerPrincipal from '../../components/BannerPrincipal';
import BotonesFlotantes from '../../components/BotonFlotante';
import Buscador from '../../components/BuscadorCreaTuViaje';
import TituloSeccion from '../../components/TituloSecciones';
import SeccionOportunidades from '../../components/SeccionOportunidades';
import SeccionTipoDeViaje from '../../components/SeccionTipoDeViaje';
import SeccionMasVendido from '../../components/SeccionMasVendido';
import SeccionViajeTemporada from '../../components/SeccionViajeTemporada';
import Footer from '../../components/PieDePagina';

function getBrowser(props) {
  var userAgent
  // Firefox 1.0+
  var isFirefox = typeof InstallTrigger !== 'undefined'
  // Chrome 1+
  var isChrome = !!window.chrome && !!window.chrome.webstore
  // Opera 8.0+
  var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0
  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/false || !!document.documentMode
  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia

  if (isOpera) {

    userAgent = 'isOpera'

  }else if(isFirefox){

    userAgent = 'isFirefox'

  }else if(isChrome){

    userAgent = 'isChrome'

  }else if(isIE){

    userAgent = 'isInternetExplorer'

  }else if(isEdge){

    userAgent = 'isEdge'

  }

  props.defaultAction(userAgent)
}

class Home extends React.Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
      getBrowser(this.props)
  }

  render(){
    var userAgent = this.props.home.browser
    return (
      <div>
        <Helmet>
          <title>creaturviajes.com</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <Menu/>
        <BannerPrincipal/>
        <BotonesFlotantes/>
        <TituloSeccion Color="white" Text="CREA TU VIAJE" />
        <Buscador userAgent={userAgent} />
        <TituloSeccion Text="OPORTUNIDADES" />
        <SeccionOportunidades/>
        <TituloSeccion Color="white" Text="ELIGE TU TIPO DE VIAJE" />
        <SeccionTipoDeViaje/>
        <TituloSeccion Text="LOS MÁS VENDIDO" />
        <SeccionMasVendido/>
        <TituloSeccion Color="white" Text="VIAJE DE TEMPORADA" />
        <SeccionViajeTemporada/>
        <Footer/>
      </div>
    );
  }

}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    defaultAction: (type) => {
      dispatch(defaultAction(type))
    },
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
