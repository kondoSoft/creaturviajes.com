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
`;

const LineaTituloSeccion = styled.div`
	background: #ee7202;
	height: 2px;

	/* xsmall-0 */
	@media screen and (max-width: 480px) {

	}

	/* xsmall-1 */
	@media screen and (max-width: 600px) and (min-width: 481px) {

	}

	/* small-0 */
	@media screen and (max-width: 840px) and (min-width: 601px) {

	}

	/* small-1 */
	@media screen and (max-width: 960px) and (min-width: 841px) {

	}

	/* medium */
	@media screen and (max-width: 1280px) and (min-width: 961px) {
		width: 33%;
	}

	/* large-0 */
	@media screen and (max-width: 1440px) and (min-width: 1281px) {
		width: 35%;
	}

	/* large-1 */
	@media screen and (max-width: 1600px) and (min-width: 1441px) {
		width: 37%;
	}

	/* large-2 */
	@media screen and (max-width: 1920px) and (min-width: 1601px) {
		width: 39%;
	}

	/* xlarge */
	@media screen and (min-width: 1921px) {

	}
`;

export {
		SeccionTitulo,
		Titulo,
		LineaTituloSeccion
}