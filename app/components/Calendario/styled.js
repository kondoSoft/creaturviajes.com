import styled from 'styled-components';

const DivCalendario = styled.div`
	.rw-calendar-header{
		background:  #ee7202;

		:nth-child(1), :nth-child(2), :nth-child(3) {
			font-size: 32px;
			color: white;
		}
	}

	.rw-calendar-transition-group{
		border-left: 1px solid #8f8f8f;
		border-right: 1px solid #8f8f8f;
		border-bottom: 1px solid #8f8f8f;
	}

	.rw-cell.rw-state-selected, .rw-cell.rw-state-selected:hover{
		background-color: #FDA759;
		border: 1px solid #FDA759;
		font-weight: bold;
	}
	.rw-cell.rw-state-focus, .rw-cell.rw-state-focus:hover{
		border: 1px solid #FDA759;
	}
`;


export {
	DivCalendario
}