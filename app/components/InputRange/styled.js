import styled from 'styled-components';
import RangeInput from 'react-input-range';

const InputContainer = styled.div`
	padding-left: 5%;
	padding-right: 5%;

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