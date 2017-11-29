import styled from 'styled-components';

const DivCalendario = styled.div`
	*{ font-family: AvenirBook; }

	.Main{
		width: 100%;
		height: 100%;
	}

	.Header{
		display: -webkit-flex;
		display: flex;
		-webkit-flex-flex-direction: row;
					 flex-direction: row;
		background-color: #ee7202;
		color: white;
		.Titulo{
			width: 70%;
			font-size: 36px;
			text-align: center;
		}
		#FlechaIzquierda, #FlechaDerecha{
			cursor: pointer;
			width: 15%;
			display: flex;
			justify-content: space-around;
			align-items: center;

			&:hover{
				background-color: blue;
			}
		}
		.FlechaIzq{
			width: 0; 
		    height: 0; 
		    border-right: 20px solid #ffffff;
		    border-top: 10px solid transparent;
		    border-bottom: 10px solid transparent; 
		}
		.FlechaDer{
			width: 0; 
		    height: 0; 
		    border-left: 20px solid #ffffff;
		    border-top: 10px solid transparent;
		    border-bottom: 10px solid transparent; 
		}
	}

	.Body{
		display: -webkit-flex;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		align-content: stretch;
		width: 100%;
		height: 100%;
		background-color: white;
		border-left: 2px solid gray;
		border-right: 2px solid gray;
		border-bottom: 2px solid gray;

		.Mes{
			cursor: pointer;
			display: -webkit-flex;
			display: flex;
			-webkit-flex-justify-content: space-around;
						 justify-content: space-around;
			-webkit-flex-align-items: center;
						 align-items: center;
			width: 25%;
			height: 75%;
			margin-top: 7%;
			margin-bottom: 7%;
			border: 1px solid black;
			&:hover,
			&:active{
				background-color: #F4AA67;
			}
		}
	}
	.oculto{
		display: none;
	}


	.slide-izquierda-entrada {
		-webkit-animation: slide-izquierda-entrada 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
		        animation: slide-izquierda-entrada 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}

	@-webkit-keyframes slide-izquierda-entrada {
	  0% {
	    -webkit-transform: translateX(-1000px);
	            transform: translateX(-1000px);
	    opacity: 0;
	  }
	  100% {
	    -webkit-transform: translateX(0);
	            transform: translateX(0);
	    opacity: 1;
	  }
	}
	@keyframes slide-izquierda-entrada {
	  0% {
	    -webkit-transform: translateX(-1000px);
	            transform: translateX(-1000px);
	    opacity: 0;
	  }
	  100% {
	    -webkit-transform: translateX(0);
	            transform: translateX(0);
	    opacity: 1;
	  }
	}

	.slide-derecha-entrada {
		-webkit-animation: slide-derecha-entrada 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
		        animation: slide-derecha-entrada 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}
	@-webkit-keyframes slide-derecha-entrada {
	  0% {
	    -webkit-transform: translateX(1000px);
	            transform: translateX(1000px);
	    opacity: 0;
	  }
	  100% {
	    -webkit-transform: translateX(0);
	            transform: translateX(0);
	    opacity: 1;
	  }
	}
	@keyframes slide-derecha-entrada {
	  0% {
	    -webkit-transform: translateX(1000px);
	            transform: translateX(1000px);
	    opacity: 0;
	  }
	  100% {
	    -webkit-transform: translateX(0);
	            transform: translateX(0);
	    opacity: 1;
	  }
	}

	.slide-izquierda-salida {
		-webkit-animation: slide-izquierda-salida 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
		        animation: slide-izquierda-salida 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	}
	@-webkit-keyframes slide-izquierda-salida {
	  0% {
	    -webkit-transform: translateX(0);
	            transform: translateX(0);
	    opacity: 1;
	  }
	  100% {
	    -webkit-transform: translateX(-1000px);
	            transform: translateX(-1000px);
	    opacity: 0;
	  }
	}
	@keyframes slide-izquierda-salida {
	  0% {
	    -webkit-transform: translateX(0);
	            transform: translateX(0);
	    opacity: 1;
	  }
	  100% {
	    -webkit-transform: translateX(-1000px);
	            transform: translateX(-1000px);
	    opacity: 0;
	  }
	}

	.slide-derecha-salida {
		-webkit-animation: slide-derecha-salida 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
		        animation: slide-derecha-salida 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	}
	@-webkit-keyframes slide-derecha-salida {
	  0% {
	    -webkit-transform: translateX(0);
	            transform: translateX(0);
	    opacity: 1;
	  }
	  100% {
	    -webkit-transform: translateX(1000px);
	            transform: translateX(1000px);
	    opacity: 0;
	  }
	}
	@keyframes slide-derecha-salida {
	  0% {
	    -webkit-transform: translateX(0);
	            transform: translateX(0);
	    opacity: 1;
	  }
	  100% {
	    -webkit-transform: translateX(1000px);
	            transform: translateX(1000px);
	    opacity: 0;
	  }
	}

`;


export {
	DivCalendario
}