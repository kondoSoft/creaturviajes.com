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


export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Menu/>
        <BannerPrincipal/>
        <BotonesFlotantes/>
        <Buscador/>
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
