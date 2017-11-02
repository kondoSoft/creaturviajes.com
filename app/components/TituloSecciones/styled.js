import styled from 'styled-components';

const SeccionTitulo = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	background: ${props => props.Color ? '#ffffff' : '#f5f4f4'}
`;	

const Titulo = styled.h1`
	color: #001a5a;
	font-family: AvenirBook;
	padding-left: 26px;
	padding-right: 26px;
`;

const LineaTituloSeccion = styled.div`
	background: #ee7202;
	width: 38%;
	height: 2px;
`;

export {
		SeccionTitulo,
		Titulo,
		LineaTituloSeccion
}