/**
*
* Calendario
*
*/

import React from 'react';
import { DivCalendario } from './styled';

import Moment from 'moment';
import 'moment/locale/es.js';
import momentLocalizer from 'react-widgets-moment';

import { Calendar } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';

class Calendario extends React.Component {

  render(){
    momentLocalizer(Moment())

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
        currentDateRange={[new Date(2017, 2), new Date(2017, 3)] }
      />
		</DivCalendario>
	)

  }
}

Calendario.propTypes = {

};

export default Calendario;
