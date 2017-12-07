import styled from 'styled-components';

const DivTipoDeViaje = styled.div`
	width: 100%;
	background-color: #ffffff;
	padding-left: 2%;
	padding-right: 2%;
	padding-bottom: 3%;
	
	.slick-prev, .slick-next{
		top: 50%;
	}
	.slick-prev{
		left: 1.5%;
		z-index: 1;
	}
	.slick-next{
		right: 1.5%;
		z-index: 1;
	}

	.slick-arrow.slick-prev, .slick-arrow.slick-next{
		background-color: white;
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.slick-prev:before, .slick-next:before{
		content: '';
	}

	.flechaIzquierda {
		height: 15px; 
		width: 15px;
		border: 1px solid black;
		border-width: 0 0 1px 1px;
		transform: rotate(45deg);
	}

	.flechaDerecha {
		height: 15px; 
		width: 15px;
		border: 1px solid black;
		border-width: 1px 1px 0 0;
		transform: rotate(45deg);
	}
`;

export { DivTipoDeViaje }