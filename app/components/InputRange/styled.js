import styled from 'styled-components';
import RangeInput from 'react-input-range';

const InputContainer = styled.div`
	padding-left: 10%;
	padding-right: 10%;

	input[type=range] {
		-webkit-appearance: none;
		-moz-appearance: none;
	}

	.input-range__track--active, .input-range__slider{
		background: #ee7202;
		border: none;
	}
`;

export { InputContainer }