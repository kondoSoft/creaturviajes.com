import styled from 'styled-components';

const DivCalendario = styled.div`
	button.react-calendar__navigation__arrow.react-calendar__navigation__prev2-button,
	button.react-calendar__navigation__arrow.react-calendar__navigation__next2-button{
		display: none;
	}

	.react-calendar {
	  width: 100%;
	  border-bottom: 1px solid #a0a096;
	  border-left: 1px solid #a0a096;
	  border-right: 1px solid #a0a096;
	  font-family: AvenirRomans;
	}
	
	.react-calendar button {
	  outline: none;
	}
	button.react-calendar__tile[disabled] {
	  background-color: #f0f0f0;
	}
	button.react-calendar__tile:not([disabled]):hover {
	  background-color: #e6e6e6;
	}
	.react-calendar__tile--hasActive {
	  background: #76baff;
	}
	button.react-calendar__tile--hasActive:not([disabled]):hover {
	  background: #a9d4ff;
	}
	.react-calendar__tile--active {
	  background: #f8c699;
	  color: white;
	}
	button.react-calendar__tile--active:not([disabled]):hover {
		background: #f18e34;
	}
	.react-calendar__navigation {
		background: #ee7202;
		font-size: 36px;
		color: white;
		padding-top: 2%;
		padding-bottom: 2%;
		border: 0;
	}
	.react-calendar__navigation button {
	  min-width: 44px;
	  height: 100%;
	}
	.react-calendar__navigation button:not([disabled]):hover {
	  background-color: #e6e6e6;
	}
	.react-calendar__year-view .react-calendar__tile,
	.react-calendar__decade-view .react-calendar__tile,
	.react-calendar__century-view .react-calendar__tile {
	  margin-top: 15px;
	  margin-bottom: 15px;
	  font-size: 18px;
	  font-weigth: bolder;
	}

	.react-calendar__year-view__months > * {
	    flex-basis: 25% !important;
	}

	#FlechaIzquierda, #FlechaDerecha{
		cursor: pointer;
		width: 100%;
		height: 44px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.FlechaIzq{
		width: 0; 
	    height: 0; 
	    border-right: 20px solid #ffffff;
	    border-top: 10px solid transparent;
	    border-bottom: 10px solid transparent; 
	}
	.FlechaDer{
		width: 0; 
	    height: 0; 
	    border-left: 20px solid #ffffff;
	    border-top: 10px solid transparent;
	    border-bottom: 10px solid transparent; 
	}

`;


export {
	DivCalendario
}