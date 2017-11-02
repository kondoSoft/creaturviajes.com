/**
*
* Calendario
*
*/

import React from 'react';
import { DivCalendario } from './styled';
//import * as moment from 'moment/moment';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';

import { Calendar } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';

class Calendario extends React.Component {

  render(){

  momentLocalizer()

	return (
		<DivCalendario>
      <Calendar
        views={['year']}
        min={new Date(2017, 0)}
        max={new Date(2018, 11)}
        footer={false}
        monthFormat={
          mt => [
                  'Ene', 'Feb', 'Mar',
                  'Abr', 'May', 'Jun',
                  'Jul', 'Ago', 'Sep',
                  'Oct', 'Nov', 'Dic'
                ][
                  mt.getMonth()
                ]
              }
      />
		</DivCalendario>
	)

  }
}

Calendario.propTypes = {

};

export default Calendario;
