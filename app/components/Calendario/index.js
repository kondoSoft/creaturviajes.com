/**
*
* Calendario
*
*/

import React from 'react';

import * as moment from 'moment/moment';

import { Calendar } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';

class Calendario extends React.Component {
  

  render(){
  	console.log('===============Moment=================')
  	console.log(moment())
  	console.log('===============Moment=================')

	return (
		<div>

			{
				//<Calendar></Calendar>
			}
		</div>
	)

  }
}

Calendario.propTypes = {

};

export default Calendario;
