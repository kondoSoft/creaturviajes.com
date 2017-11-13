import styled from 'styled-components';

const ContenedorFooter = styled.div`
	background: #001a5a;
	padding-top: 1%;
	padding-left: 3%;
	padding-right: 3%;
	padding-bottom: 3%;
`;

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
	border-bottom: 2px solid #ee7202;
`;

const ColumnaPrincipalFooter = styled.div`
	width: 30%;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	padding-left: 3%;
`;

const CorreoFooter = styled.h3`
	color: white;
	font-size: 28px;
	padding-left: 2%;
`;

const SpanNaranja = styled.span`
	color: #ee7202;
`;

const FilaRedesSociales = styled.div`
	width: 100%;
`;

const LogoFooter = styled.img`
  width: 70%;
  padding-top: 3%;
`;

const IconosRedesSociales = styled.img`
  width: 50px;
  margin-right: 5%;
`;

const ColumnaSecundaria = styled(ColumnaPrincipalFooter)`
	width: 40%;
	display: -webkit-flex;
	display: flex;
	flex-flow: wrap;
	ul{
		width: 33.3%;
		list-style: none;
		margin: 0px;
		padding: 0px;
	}
	li{
		color: white;
		margin-top: 5%;
		margin-bottom: 10%;
		margin-right: 12%;

		&:before {
		    content: "• ";
		    color: #ee7202;
		}

		a{
			color: white;
			text-decoration: none;
			font-family: AvenirBook;
			font-size: 22px;
			font-weight: bold;
			padding-bottom: 2%;

			&:hover {
		    	border-bottom: 3px solid #ee7202;
			}
		}
	}

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
		li{
			font-size: 14px;
		}	
	}

	/* large-0 */
	@media screen and (max-width: 1440px) and (min-width: 1281px) {
		li{
			font-size: 14px;
		}
	}

	/* large-1 */                   
	@media screen and (max-width: 1600px) and (min-width: 1441px) {

	}

	/* large-2 */
	@media screen and (max-width: 1920px) and (min-width: 1601px) {

	}

	/* xlarge */
	@media screen and (min-width: 1921px) {

	}
`;

const TituloColumna = styled.h3`
	width: 100%;
	color: white;
	font-family: AvenirBook;
	font-size: 28px;
	margin-bottom: 0px;

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

	}

	/* large-0 */
	@media screen and (max-width: 1440px) and (min-width: 1281px) {
		
	}

	/* large-1 */
	@media screen and (max-width: 1600px) and (min-width: 1441px) {

	}

	/* large-2 */
	@media screen and (max-width: 1920px) and (min-width: 1601px) {

	}

	/* xlarge */
	@media screen and (min-width: 1921px) {

	}
`;

const SubTitulo = styled(TituloColumna)`
	font-size: 20px;
	margin-top: 0px;
	font-weight: 100;

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

	}

	/* large-0 */
	@media screen and (max-width: 1440px) and (min-width: 1281px) {

	}

	/* large-1 */
	@media screen and (max-width: 1600px) and (min-width: 1441px) {
		
	}

	/* large-2 */
	@media screen and (max-width: 1920px) and (min-width: 1601px) {

	}

	/* xlarge */
	@media screen and (min-width: 1921px) {

	}
`;

const UltimaColumna = styled(ColumnaPrincipalFooter)`
	width: 30%;
	
	div{
		
		display: flex;
		flex-flow: row wrap;
		justify-content: left;

		div{
			
			width: 100%;
			margin-top: 20px;
			
			input{
				font-family: AvenirRoman;
				font-size: 20px;
				background: white;
				width: 75%;
				height: 60px;
				padding: 3%;
			}

			::-webkit-input-placeholder {
			  color: gray;
			}
			::-moz-placeholder {
			  color: gray;
			}
			:-ms-input-placeholder {
			  color: gray;
			}

			button{
				background: #ee7202;
				color: white;
				width: 10%;
			}
		}
	}

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
		div{
			div{
				input{
					width: 85%;
				}
				button{
					width: 15%;
				}
			}
		}
	}

	/* large-0 */
	@media screen and (max-width: 1440px) and (min-width: 1281px) {
		div{
			div{
				input{
					width: 85%;
				}
				button{
					width: 15%;
				}
			}
		}
	}

	/* large-1 */
	@media screen and (max-width: 1600px) and (min-width: 1441px) {
			div{
				div{
					input{
						width: 80%;
					}
					button{
						width: 10%;
					}
				}
			}
		}
	}

	/* large-2 */
	@media screen and (max-width: 1920px) and (min-width: 1601px) {

	}

	/* xlarge */
	@media screen and (min-width: 1921px) {

	}
`;

const ContenedorFinal = styled.div`
   width: 100%;
   display: flex;
   flex-flow: row;
   align-items: center;
   margin-top: 20px;
   font-family: AvenirBook;
   justify-content: space-around;

   div{
   	width: 50%;
   	padding: 0;
   	margin: 0;
   	display: flex;
   	flex-flow: row;
   	align-items: center;
	   p {
	   	color: white;
	   	font-size: 20px;
	   	font-family: AvenirBook;
	   	margin-left: 30px;
	   }

	   img {
	   	width: 20%;
	   }
   }
   a {
   	color: white;
   }

   #viajesdelujo {
   	color: white;
   	font-size: 26px;
   }
`;

export {
		ContenedorFooter,
		Footer,
		ColumnaPrincipalFooter,
		FilaRedesSociales,
		ColumnaSecundaria,
		LogoFooter,
		CorreoFooter,
		TituloColumna,
		SubTitulo,
		SpanNaranja,
		IconosRedesSociales,
		ContenedorFinal,
		UltimaColumna
	}