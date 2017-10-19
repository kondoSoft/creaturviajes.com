import styled from 'styled-components';

const BuscadorCreatur = styled.div`
	display: flex;
	margin-right: auto;
	margin-left: auto;
	padding-top: 3%;
	padding-right: 15%;
	padding-left: 15%;
	width: 100%;
	background: white;
	justify-content: justify;
	flex-wrap: wrap;
`;

const SeccionTitulo = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	align-items: center;
`;

const TituloBuscador = styled.h1`
	font-family: AvenirBook;
	margin: 0px;
	color: #001a5a;
	padding-left: 2%;
	padding-right: 2%;
`;
const LineaBuscador = styled.div`
	width: 38.5%;
	height: 4%;
	background-color: #ee7202;
`;

const SeccionIzquierda = styled.div`
	width: 50%;
	height: 500px;
`;

const InputsSecciones = styled.input`
	
`;


const SeccionDestinos = styled.div`
	width: 100%;
	height: 49%;
	display: flex;
	flex-flow: wrap;
	flex-direction: column;
`;


const LineaSeccion = styled(LineaBuscador)`
	width: 100%;
	height: .1%;
	background-color: #ee7202;
`;

const SeccionPaises = styled.div`
	width: 100%;
	height: 49%;
`;

const SeccionDerecha = styled.div`
	background: palevioletred;
	width: 50%;
	height: auto;
`;

const TituloDestinos = styled.h3`
	font-family: AvenirBook;
	color: #001a5a;
`;

export {
	BuscadorCreatur,
	SeccionTitulo,
	TituloBuscador,
	LineaBuscador,
	SeccionIzquierda,
	InputsSecciones,
	SeccionDestinos,
	ColumnaDestinos,
	LineaSeccion,
	SeccionPaises,
	SeccionDerecha,
	TituloDestinos,
}