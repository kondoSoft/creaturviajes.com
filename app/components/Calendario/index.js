/**
*
* Calendario
*
*/

import React from 'react';
import { DivCalendario } from './styled';

//import Calendar from 'react-calendar';
import Calendar from 'react-calendar/build/entry.nostyle';

class Calendario extends React.Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render(){

	return (
		<DivCalendario>
      <Calendar
          onChange={this.onChange}
          value={this.state.date}
          view='year'
          //minDate={new Date(2015)}
          //maxDate={new Date(2020)}
          minDetail='year'
          maxDetail='year'
        />
		</DivCalendario>
	)

  }
}

Calendario.propTypes = {

};

export default Calendario;
