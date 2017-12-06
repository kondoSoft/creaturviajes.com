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
    setOnClickFunction()
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
  function setOnClickFunction(){
    
    let titleMonths = document.getElementsByTagName('button')
    
    for (let i = 0; i < titleMonths.length; i++) {
      titleMonths[i].onclick = function() {
        if (!titleMonths[i].classList.contains('react-calendar__tile--active')) {
          titleMonths[i].classList.toggle('react-calendar__tile--active')
        }else if (titleMonths[i].classList.contains('react-calendar__tile--active')) {
          titleMonths[i].classList.toggle('react-calendar__tile--active')
        }
      }
    }
    titleMonths[7].classList.add('react-calendar__tile--active')
    titleMonths[11].classList.add('react-calendar__tile--active')
    titleMonths[12].classList.add('react-calendar__tile--active')
    titleMonths[13].classList.add('react-calendar__tile--active')
    titleMonths[17].classList.remove('react-calendar__tile--active')
  }

Calendario.propTypes = {

};

export default Calendario;
