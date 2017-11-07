import styled from 'styled-components';

const ContenedorFooter = styled.div`
	background: #001a5a;
	padding: 3%;
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
	width: 40%;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	padding-left: 3%;
`;

const FilaRedesSociales = styled.div`
	width: 100%;
	margin-bottom: 25px;
`;

const CorreoFooter = styled.h3`
	color: white;
	margin-top: 100px;
`;

const TituloColumna = styled.h3`
	width: 100%;
	margin-left: 13px;
	color: white;
	font-family: AvenirBook;
	font-size: 24px;
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
		margin-left: 0px;
		font-size: 20px;
	}

	/* large-0 */
	@media screen and (max-width: 1440px) and (min-width: 1281px) {
		margin-left: 0px;
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
	font-size: 13px;
	margin-top: 0px;

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
		font-size: 15px;
	}

	/* large-2 */
	@media screen and (max-width: 1920px) and (min-width: 1601px) {

	}

	/* xlarge */
	@media screen and (min-width: 1921px) {

	}
`;

const SpanNaranja = styled.span`
	color: #ee7202;
`;

const ColumnaSecundaria = styled(ColumnaPrincipalFooter)`
	width: 30%;
	display: flex;
	flex-flow: wrap;
	ul{
		list-style: none;
		margin: 0px;
		padding: 0px;
	}
	li{
		color: white;
		margin-top: 5px;
		margin-right: 20px;
		margin-bottom: 25px;
		font-size: 18px;
		&:before {
		    content: "• ";
		    color: #ee7202;
		}

		&:hover {
		    text-decoration: underline;
		    text-decoration-color: #ee7202;
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
				background: white;
				width: 70%;
				height: 50px;
				padding-left: 5%;
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
				button
				{
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
				button
				{
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
					button
					{
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


const LogoFooter = styled.img`
  width: 40%;
  margin: 0px;
  padding: 0px;
`;

const IconosRedesSociales = styled.img`
  width: 35px;
  margin-right: 20px;
`;

const ContenedorFinal = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   margin-top: 20px;
   font-family: AvenirBook;
   p{
   	color: white;
   	font-size: 20px;
   	font-family: AvenirBook;
   	margin-left: 30px;
   }
   img{
   	width: 200px;
   }
   div{
   	position: absolute;
   	right: 75px;
   }
   a{
   	color: white;
   	font-size: 14px;
   	justify-content: right;
   }
`;

const ButtonNavBar = styled.a`
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
  border: ${props => props.blue ? '1px solid transparent' : 'none'};
  padding: .5rem 1.5rem .5rem 1.5rem;
  font-size: 1rem;
  line-height: 1.25;
  transition: all 0.15s ease-in-out;
  color: ${props => props.blue ? 'white' : 'black'};
  background-color: ${props => props.blue ? '#001a5a' : 'white'};
  margin-right: ${props => props.logo ? '7%' : ''};
  border-color: #001a5a;
  display: ${props => props.displayNone ? 'none' : 'inherit'};
  &:hover{
  	opacity: 0.5;
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
  	padding: 0px;
  	margin-right: 16px;
  }

  /* large-0 */
  @media screen and (max-width: 1440px) and (min-width: 1281px) {
  	padding: 0px;
  	margin-right: 16px;

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

const IconNavBar = styled.img`
  width: 27px;
  height: 27px;
  margin-right: 15px;  
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
		ButtonNavBar,
		IconNavBar,
		UltimaColumna
	}