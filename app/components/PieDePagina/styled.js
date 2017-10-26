import styled from 'styled-components';

const Footer = styled.div`
	width: 100%;
	display: -webkit-flex;
	display: flex;
	flex-direction: row;
	flex-flow: wrap;
	right: 0px;
	bottom: 0px;
	left: 0px;
	padding: 1%;
	margin: 0;
	background: #001a5a;
`;

const ColumnaPrincipalFooter = styled.div`
	width: 40%;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	padding-left: 3%;
`;

const EspacioCorreo = styled.div`
	margin-top: 50px;
	display: flex;
	flex-flow: wrap;
`;

const NombreCorreoFooter = styled.h3`
	color: #ee7202;
	paddig: 0;
	margin: 0;
`;

const DominioCorreoFooter = styled(NombreCorreoFooter)`
	color: #ffffff;
`;

const ColumnaSecundaria = styled(ColumnaPrincipalFooter)`
	width: 30%;
`;

const LogoFooter = styled.img`
  width: 30%;
  margin: 0px;
  padding: 0px;
`;

export {
		Footer,
		ColumnaPrincipalFooter,
		ColumnaSecundaria,
		LogoFooter,
		EspacioCorreo,
		NombreCorreoFooter,
		DominioCorreoFooter
	}