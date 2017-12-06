/**
*
* Calendario
*
*/

import React from 'react';
import { DivCalendario } from './styled';

//import Calendar from 'react-calendar';
import Calendar from 'react-calendar/build/entry.nostyle';

function PrevArrow() {
  return (
    <div id='FlechaIzquierda' >
      <div className='FlechaIzq'></div>
    </div>
  );
}

function NextArrow() {
  return (
    <div id='FlechaDerecha' >
      <div className='FlechaDer'></div>
    </div>
  );
}

class Calendario extends React.Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })
  
  componentDidMount() {
    setMonthsNames()
    setMockup()
  }

  render(){    
    let finderCalendar = document.getElementById('calendarFinder')
    console.log(finderCalendar)
    return (
      <DivCalendario>
        <Calendar 
            id='calendarFinder'
            onChange={this.onChange}
            value={this.state.date}
            returnValue='range'
            view='year'
            minDate={new Date(2017, 0, 1)}
            maxDate={new Date(2020, 11, 31)}
            minDetail='year'
            maxDetail='year'
            prevLabel={<PrevArrow/>}
            nextLabel={<NextArrow/>}
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
  function setMockup(){
    
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
