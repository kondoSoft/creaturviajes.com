/*
 *
 * Home
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectHome from './selectors';
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

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Menu/>
        <BannerPrincipal/>
        <BotonesFlotantes/>
        <TituloSeccion Color="white" Text="CREA TU VIAJE" />
        <Buscador/>
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
  Home: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
