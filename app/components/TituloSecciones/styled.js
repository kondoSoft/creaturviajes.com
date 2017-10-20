import styled from 'styled-components';

const SeccionTitulo = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	background: ${props => props.Color ? '#ffffff' : '#f5f4f4'}
`;	

const Titulo = styled.h1`
	color: #001a5a;
	font-family: AvenirBook;
`;

export {
		SeccionTitulo,
		Titulo
}