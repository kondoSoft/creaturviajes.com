import styled from 'styled-components';

const DivCalendario = styled.div`
	.rw-calendar-header{
		background:  #ee7202;

		:nth-child(2) {
			font-size: 32px;
			color: white;
		}
	}

	.rw-calendar-transition-group{
		border-left: 2px solid #8f8f8f;
		border-right: 2px solid #8f8f8f;
		border-bottom: 2px solid #8f8f8f;
	}

	.rw-cell.rw-state-selected, .rw-cell.rw-state-selected:hover{
		background-color: #ee7202;
		border: 1px solid #ee7202;
		font-weight: bold;
	}
`;


export {
	DivCalendario
}