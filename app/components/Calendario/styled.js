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
	}
	
	.react-calendar button {
	  border: 0;
	  outline: none;
	}
	.react-calendar button:not([disabled]):hover {
	  cursor: pointer;
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
	  padding: 1em 1em;
	}	
`;


export {
	DivCalendario
}