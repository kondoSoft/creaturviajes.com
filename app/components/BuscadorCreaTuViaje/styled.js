import styled from 'styled-components';

const style = {
	labelNormal: {

	},
	labelActive: {
		color: '#ee7202',
		fontFamily: 'AvenirBook',
		textDecoration: 'underline'
	}
}
const CreaturBuscador = styled.div`
	width: 100%;
	height: auto;
	padding-top: 0px;
	padding-left: 7%;
	padding-right: 7%;
	padding-bottom: 3%;
	margin-top: 0px;
	background: white;
	display: -webkit-flex;
	display: flex;
	flex-direction: row;
	flex-flow: wrap;

	label{
		font-family: AvenirBook;
		color: #8f8f8f;
	}
`;

const TituloSeccion = styled.h3`
	font-family: AvenirBook;
	color: #001a5a;
	width: 100%;
`;

const SeccionIzquierda = styled.div`
	width: 50%;
	padding-top: 20px;
	padding-bottom: 20px;
`;
const ContenedorInputSeccion = styled.div`
	padding: 5px;
	label{
		&:hover, 
		&:focus, 
		&.focus, 
		&:active {
		  color: #ee7202;
		  font-family: AvenirBook;
		  text-decoration: underline;
		}
	}
`;
const InputsSecciones = styled.input`

`;

const SeccionDestinos = styled.div`
	width: 100%;
	display: -webkit-flex;
	display: flex;
	flex-direction: row;
	flex-flow: wrap;
`;

const SeccionPaises = styled.div`
	width: 100%;
	display: -webkit-flex;
	display: flex;
	flex-direction: row;
	flex-flow: wrap;

`;

const ColumnasSeccion = styled.div`
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	width: 33.3%;
`;

const SeccionTiposDeViaje = styled.div`
	width: 25%;
	padding-top: 20px;
	padding-bottom: 20px;
`;

const SeccionFechasPresupuesto = styled.div`
	width: 25%;
	padding-top: 20px;
	padding-bottom: 20px;
`;

const SeccionBotones = styled.div`
	width: 100%;
	display: -webkit-flex;
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
	TituloSeccion,
	SeccionIzquierda,
	ContenedorInputSeccion,
	InputsSecciones,
	SeccionDestinos,
	SeccionPaises,
	ColumnasSeccion,
	SeccionTiposDeViaje,
	SeccionFechasPresupuesto,
	SeccionBotones,
	BotonBuscadorAzul,
	BotonBuscadorNaranja,
	style
}