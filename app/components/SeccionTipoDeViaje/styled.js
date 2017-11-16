import styled from 'styled-components';

const DivTipoDeViaje = styled.div`
	width: 100%;
	background-color: #ffffff;
	padding-left: 2%;
	padding-right: 2%;
	
	.slick-prev, .slick-next{
		top: 25%;
	}
	.slick-prev{
		left: 3%;
		z-index: 1;
	}
	.slick-next{
		right: 3%;
		z-index: 1;
	}
`;

export { DivTipoDeViaje }