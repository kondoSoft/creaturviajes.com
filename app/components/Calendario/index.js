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
  
  componentDidMount() {
    setMonthsNames()
  }

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

  function setMonthsNames(){
    
    let titleMonths = document.getElementsByTagName('time')
        
    for (let i = 0; i < titleMonths.length; i++) {
      let finalMonthName

      let monthName = titleMonths[i].textContent
      let capitalLetter = monthName.substring(0, 1)
      
      monthName = monthName.substring(1, 3)
      capitalLetter = capitalLetter.toUpperCase()

      finalMonthName = capitalLetter + monthName
      titleMonths[i].textContent = finalMonthName
    }
    
  }

Calendario.propTypes = {

};

export default Calendario;
