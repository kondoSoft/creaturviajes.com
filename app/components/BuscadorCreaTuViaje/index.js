/**
*
* BuscadorCreaTuViaje
*
*/

import React from 'react';
import {
		CreaturBuscador,
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
		} from './styled.js';

import InputRange from '../InputRange';
import Calendario from '../Calendario';

const Destinos = [
					'Todos los destinos',
					'África',
					'Antártida',
					'Ártico',
					'Asia',
					'Australia & Nueva Zelanda',
					'Cuba',
					'Egipto',
					'India',
					'Europa',
					'América Latina',
					'Norteamérica'
				];
var d = 0;

const Paises = [
				'Argentina',
				'Bolivia',
				'Brasil',
				'Chile',
				'Colombia',
				'Costa Rica',
				'Ecuador',
				'Nicaragua',
				'Perú',
				'México',
				'Costa Rica',
				'Ecuador',
				'Nicaragua',
				'Perú',
				'México'
				];
var p = 0;

const TiposDeViajes = [
						'Viajes en grupo',
						'Hecho a la medida',
						'Cruceros fluviales',
						'Canal Barge Cruceros',
						'Cruceros de lujo',
						'Hecho a la medida',
						'Alas sobre el mundo',
						'Jet privado',
						'Familia',
						'Safaris africanos',
						'Canal Barge Cruceros',
						'Expediciones'
					];
var t = 0;


class BuscadorCreaTuViaje extends React.Component {
	constructor(props) {
		super(props);
		
	}


  render(){
  		var userAgent
		// Firefox 1.0+
		var isFirefox = typeof InstallTrigger !== 'undefined'
		// Chrome 1+
    	var isChrome = !!window.chrome && !!window.chrome.webstore
		// Opera 8.0+
		var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0
		// Internet Explorer 6-11
	    var isIE = /*@cc_on!@*/false || !!document.documentMode
	    // Edge 20+
	    var isEdge = !isIE && !!window.StyleMedia

	    if (isOpera) {
	    	userAgent = 'isOpera'
		}else if(isFirefox){
	    	userAgent = 'isFirefox'
	    }else if(isChrome){
	    	userAgent = 'isChrome'
	    }else if(isIE){
	    	userAgent = 'isInternetExplorer'
	    }else if(isEdge){
	    	userAgent = 'isEdge'
	    }
	    console.log('======================navegador=========================')
		console.log(userAgent)
		console.log('======================navegador=========================')
  	  return (
  	  	<form>
  	  	  	<CreaturBuscador>
  	  		  	<SeccionIzquierda>
  	  		  		<TituloSeccion>Destinos</TituloSeccion>
  	  		  		<SeccionDestinos>
  	  		  			<ColumnasSeccion>
  	  		  				{
  	  		  					Destinos.map(
  	  		  						(item, i)=>{
  	  		  							if (item === 'Todos los destinos') {
  	  		  								if (userAgent === 'isFirefox') {
  	  		  									return(
				  									<ContenedorInputSeccion moz key={i}>
				  								  		<input type="radio" id={"valueDestinos" + i} name="valueDestinos" value={item} defaultChecked/>
				  										<label htmlFor={"valueDestinos"+i}> {item}</label>
				  									</ContenedorInputSeccion>
			  		  							)
  	  		  								}else{
			  		  							return(
				  									<ContenedorInputSeccion key={i}>
				  								  		<input type="radio" id={"valueDestinos" + i} name="valueDestinos" value={item} defaultChecked/>
				  										<label htmlFor={"valueDestinos"+i}> {item}</label>
				  									</ContenedorInputSeccion>
			  		  							)
  	  		  								}
  	  		  							}else{
  	  		  								if (userAgent === 'isFirefox') {
			  		  							return(
				  									<ContenedorInputSeccion moz key={i}>
				  								  		<input type="radio" id={"valueDestinos" + i} name="valueDestinos" value={item} />
				  										<label htmlFor={"valueDestinos"+i}> {item}</label>
				  									</ContenedorInputSeccion>
			  		  							)
  	  		  								}else{
			  		  							return(
				  									<ContenedorInputSeccion key={i}>
				  								  		<input type="radio" id={"valueDestinos" + i} name="valueDestinos" value={item} />
				  										<label htmlFor={"valueDestinos"+i}> {item}</label>
				  									</ContenedorInputSeccion>
			  		  							)
  	  		  								}
		  		  							
  	  		  							}
  	  		  						}
  	  		  					)
  	  		  				}
  	  					</ColumnasSeccion>
  	  		  		</SeccionDestinos>
  	  		  		<TituloSeccion>Países</TituloSeccion>
  	  		  		<SeccionPaises>
  	  		  				<ColumnasSeccion>
  	  		  				{
  	  		  					Paises.map(
  	  		  						(item, i)=>{
 	  		  							if (item === 'Argentina') {
 	  		  								if (userAgent === 'isFirefox') {
		  		  								return (
		  		  									<ContenedorInputSeccion moz key={i}>
		  		  										<input type="radio" id={"valuePaises" + i} name="valuePaises" value={item} defaultChecked/>
		  		  										<label htmlFor={"valuePaises"+i}> {item} </label>
		  		  									</ContenedorInputSeccion>
			  									)
 	  		  								}else{
		  		  								return (
		  		  									<ContenedorInputSeccion key={i}>
		  		  										<input type="radio" id={"valuePaises" + i} name="valuePaises" value={item} defaultChecked/>
		  		  										<label htmlFor={"valuePaises"+i}> {item} </label>
		  		  									</ContenedorInputSeccion>
			  									)
 	  		  								}
  	  		  							}else{
  	  		  								if (userAgent === 'isFirefox') {
  	  		  									return(
  	  		  										<ContenedorInputSeccion moz key={i}>
  	  		  											<input type="radio" id={"valuePaises" + i} name="valuePaises" value={item}/>
  	  		  											<label htmlFor={"valuePaises"+i}> {item} </label>
  	  		  										</ContenedorInputSeccion>
  	  		  									)
  	  		  								}else{
  	  		  									return(
  	  		  										<ContenedorInputSeccion key={i}>
  	  		  											<input type="radio" id={"valuePaises" + i} name="valuePaises" value={item}/>
  	  		  											<label htmlFor={"valuePaises"+i}> {item} </label>
  	  		  										</ContenedorInputSeccion>
  	  		  									)
  	  		  								}
  	  		  							}
  	  		  						}
  	  		  					)
  	  		  				}
	  	  					</ColumnasSeccion>
  	  		  		</SeccionPaises>
  	  		  	</SeccionIzquierda>
  	  		  	<SeccionTiposDeViaje>
  	  		  		<TituloSeccion>Tipos de Viaje</TituloSeccion>
  	  		  		{ 
  	  		  			TiposDeViajes.map(
  	  						(item, i) => {
  	  							if (item === 'Viajes en grupo') {
  	  								if (userAgent === 'isFirefox') {
					  			  		return(
						  			  		<ContenedorInputSeccion moz key={i}>
						  				  		<input type="checkbox" id={"valueTipoDeViaje"+i} name={"valueTipoDeViaje"+i} defaultChecked/>
						  						<label htmlFor={"valueTipoDeViaje"+i} > {item}</label>
						  					</ContenedorInputSeccion>
						  				)
  	  								}else {
					  			  		return(
						  			  		<ContenedorInputSeccion key={i}>
						  				  		<input type="checkbox" id={"valueTipoDeViaje"+i} name={"valueTipoDeViaje"+i} defaultChecked/>
						  						<label htmlFor={"valueTipoDeViaje"+i} > {item}</label>
						  					</ContenedorInputSeccion>
						  				)
  	  								}
  	  							}else{
  	  								if (userAgent === 'isFirefox') {
					  			  		return(
						  			  		<ContenedorInputSeccion moz key={i}>
						  				  		<input type="checkbox" id={"valueTipoDeViaje"+i} name={"valueTipoDeViaje"+i} />
						  						<label htmlFor={"valueTipoDeViaje"+i} > {item}</label>
						  					</ContenedorInputSeccion>
					  					)
  	  								}else{
					  			  		return(
						  			  		<ContenedorInputSeccion key={i}>
						  				  		<input type="checkbox" id={"valueTipoDeViaje"+i} name={"valueTipoDeViaje"+i} />
						  						<label htmlFor={"valueTipoDeViaje"+i} > {item}</label>
						  					</ContenedorInputSeccion>
					  					)
  	  								}
  	  							}
  	  				  		}
  	  					)
  	  		  		}
  	  		  	</SeccionTiposDeViaje>
  	  		  	<SeccionFechasPresupuesto>
  	  		  		<TituloSeccion titleCenter>Mes de Salida</TituloSeccion>
  	  		  		<Calendario />
  	  		  		<br/>
  	  		  		<br/>
  	  		  		<TituloSeccion titleCenter>Presupuesto USD</TituloSeccion>
  	  		  		<br/>
  	  		  		<br/>
  	  		  		<InputRange valor='$' valor2='' numMin={0} numMax={10000} numMinValue={2000} numMaxValue={8000} step={50}/>
  	  		  		<br/>
  	  		  		<br/>
  	  		  		<TituloSeccion titleCenter>Duración del programa</TituloSeccion>
  	  		  		<br/>
  	  		  		<br/>
  	  		  		<InputRange valor='' valor2=' días' numMin={0} numMax={30} numMinValue={2} numMaxValue={25} step={1}/>
  	  		  		<br/>
  	  		  		<br/>
  	  		  	</SeccionFechasPresupuesto>
  	  		  	<SeccionBotones>
  	  		  	<div>
  	  		  		<BotonBuscadorAzul>Ver opciones</BotonBuscadorAzul>
  	  		  	</div>
  	  		  	<div>
  	  		  		<BotonBuscadorNaranja>Nueva búsqueda</BotonBuscadorNaranja>
  	  		  	</div>
  	  		  	</SeccionBotones>
  	  		</CreaturBuscador>
  	  	</form>
  	  );
  }
}

BuscadorCreaTuViaje.propTypes = {

};

export default BuscadorCreaTuViaje;
