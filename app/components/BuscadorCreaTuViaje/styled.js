import styled from 'styled-components';

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

	margin: ${props => props.moz ? '7%' : '2%'};
	
	input[type='checkbox']:checked + label,
	input[type='radio']:checked + label{
		text-decoration: underline;
		color: #ee7202;
		font-family: AvenirBook;
	}
	label{
		&:hover, 
		&:focus, 
		&.focus,
		&:active {
		  text-decoration: underline;
		  color: #ee7202;
		}
	}
	
`;

const SeccionDestinos = styled.div`
	width: 90%;
	height: 300px;
	/* Safari 6.1+ */
	display: -webkit-flex;
	/* IE 10 */ 
	display: -ms-flex;
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid  #ee7202;
`;

const SeccionPaises = styled.div`
	width: 100%;
	height: 300px;
	/* Safari 6.1+ */
	display: -webkit-flex;
	/* IE 10 */ 
	display: -ms-flex;
	display: flex;
	flex-direction: row;
`;

const ColumnasSeccion = styled.div`
	/* Safari 6.1+ */
	display: -webkit-flex;
	/* IE 10 */ 
	display: -ms-flex;
	display: flex;
	flex-direction: column;
	width: 100%;
	flex-wrap: wrap;
`;

const SeccionTiposDeViaje = styled.div`
	width: 25%;
	padding-top: 20px;
	padding-bottom: 20px;
	padding-left: 6%;
	border-right: 1px solid  #ee7202;
	border-left: 1px solid  #ee7202;

`;

const SeccionFechasPresupuesto = styled.div`
	width: 25%;
	padding-top: 20px;
	padding-bottom: 20px;
	padding-left: 3%;
`;

const SeccionBotones = styled.div`
	width: 100%;
	/* Safari 6.1+ */
	display: -webkit-flex;
	/* IE 10 */ 
	display: -ms-flex;
	justify-content: center;

	div{
		padding: 30px;
		padding-top: 60px;
	}
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
	SeccionTitulo,
	TituloSeccion,
	SeccionIzquierda,
	ContenedorInputSeccion,
	SeccionDestinos,
	SeccionPaises,
	ColumnasSeccion,
	SeccionTiposDeViaje,
	SeccionFechasPresupuesto,
	SeccionBotones,
	BotonBuscadorAzul,
	BotonBuscadorNaranja
}