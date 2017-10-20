import styled from 'styled-components';

const CreaturBuscador = styled.div`
	width: 100%;
	height: auto;
	padding-top: 2%;
	display: flex;
	background: white;
	flex-direction: row;
	flex-flow: wrap;
`;

const SeccionIzquierda = styled.div`
	width: 50%;
`;
const SeccionDestinos = styled.div`
	width: 100%;
	height: 50%;
	background: blue;
`;

const SeccionPaises = styled.div`
	width: 100%;
	height: 50%;
	background: green;
`;

const SeccionTiposDeViaje = styled.div`
	width: 25%;
	height: 500px;
	background: violet;
`;

const SeccionFechasPresupuesto = styled.div`
	width: 25%;
	background: red;
`;


const SeccionBotones = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
`;

const BotonBuscadorAzul = styled.button `
	font-family: AvenirRoman;
	display: inline-block;
	font-weight: normal;
	text-align: center;
	white-space: nowrap;
	vertical-align: middle;
	-webkit-user-select: none;
	 -moz-user-select: none;
	  -ms-user-select: none;
	      user-select: none;
	border: 1px solid transparent;
	padding: 1rem 2.5rem 1rem 2.5rem;
	font-size: 1.5rem;
	line-height: 1.25;
	transition: all 0.15s ease-in-out;
	color: #fff;
	background: #001a5a;
	border-color: #001a5a;
`;

const BotonBuscadorNaranja = styled(BotonBuscadorAzul)`
	background: #ee7202;
	border-color: #ee7202;
`;

export {
	CreaturBuscador,
	SeccionIzquierda,
	SeccionDestinos,
	SeccionPaises,
	SeccionTiposDeViaje,
	SeccionFechasPresupuesto,
	SeccionBotones,
	BotonBuscadorAzul,
	BotonBuscadorNaranja,
}