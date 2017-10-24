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

import moment from 'moment/moment';

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
  	  return (
  	  	<form>
  	  	{console.log('====================Moment=================')}
  	  	{ console.log(moment('2017-01-01')) }
  	  	  	<CreaturBuscador>
  	  		  	<SeccionIzquierda>
  	  		  		<TituloSeccion>Destinos</TituloSeccion>
  	  		  		<SeccionDestinos>
  	  		  			<ColumnasSeccion>
  	  		  				{
  	  		  					Destinos.map(
  	  		  						(item, i)=>{
  	  		  							if (item === 'América Latina') {
		  		  							return(
			  									<ContenedorInputSeccion key={i}>
			  								  		<input type="radio" id={"valueDestinos" + i} name="valueDestinos" value={item} checked/>
			  										<label> {item}</label>
			  									</ContenedorInputSeccion>
		  		  							)
  	  		  							}else{
		  		  							return(
			  									<ContenedorInputSeccion key={i}>
			  								  		<input type="radio" id={"valueDestinos" + i} name="valueDestinos" value={item} />
			  										<label> {item}</label>
			  									</ContenedorInputSeccion>
		  		  							)
  	  		  							}
  	  		  						}

  	  		  					)
  	  		  				}
  	  					</ColumnasSeccion>
  	  		  		</SeccionDestinos>
  	  		  		<TituloSeccion>Países</TituloSeccion>
  	  		  		<SeccionPaises>
  	  		  				<ColumnasSeccion>
	  	  						<ContenedorInputSeccion>
	  	  					  		<input type="radio" id="valuePaises" name="valuePaises" value="valuePaises" checked />
	  	  							<label> {Paises[0]}</label>
	  	  						</ContenedorInputSeccion>	
	  	  						<ContenedorInputSeccion>
	  	  							<input type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
	  	  							<label> {Paises[1]}</label>
	  	  						</ContenedorInputSeccion>	 
	  	  						<ContenedorInputSeccion>
	  	  					  		<input type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
	  	  							<label> {Paises[2]}</label>
	  	  						</ContenedorInputSeccion>	
	  	  						<ContenedorInputSeccion>
	  	  							<input type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
	  	  							<label> {Paises[3]}</label>
	  	  						</ContenedorInputSeccion> 			
	  	  						<ContenedorInputSeccion>
	  	  					  		<input type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
	  	  							<label> {Paises[4]}</label>
	  	  						</ContenedorInputSeccion>
	  	  						<ContenedorInputSeccion>
	  	  							<input type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
	  	  							<label> {Paises[5]}</label>
	  	  						</ContenedorInputSeccion>	 
	  	  						<ContenedorInputSeccion>
	  	  					  		<input type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
	  	  							<label> {Paises[6]}</label>
	  	  						</ContenedorInputSeccion>	
	  	  						<ContenedorInputSeccion>
	  	  							<input type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
	  	  							<label> {Paises[7]}</label>
	  	  						</ContenedorInputSeccion>
	  	  						<ContenedorInputSeccion>
	  	  					  		<input type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
	  	  							<label> {Paises[8]}</label>
	  	  						</ContenedorInputSeccion>	
	  	  						<ContenedorInputSeccion>
	  	  							<input type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
	  	  							<label> {Paises[9]}</label>
	  	  						</ContenedorInputSeccion>
	  	  						<ContenedorInputSeccion>
	  	  					  		<input type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
	  	  							<label> {Paises[10]}</label>
	  	  						</ContenedorInputSeccion>	
	  	  						<ContenedorInputSeccion>
	  	  							<input type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
	  	  							<label> {Paises[11]}</label>
	  	  						</ContenedorInputSeccion>
	  	  						<ContenedorInputSeccion>
	  	  					  		<input type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
	  	  							<label> {Paises[12]}</label>
	  	  						</ContenedorInputSeccion>	
	  	  						<ContenedorInputSeccion>
	  	  							<input type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
	  	  							<label> {Paises[13]}</label>
	  	  						</ContenedorInputSeccion>	 
	  	  						<ContenedorInputSeccion>
	  	  					  		<input type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
	  	  							<label> {Paises[14]}</label>
	  	  						</ContenedorInputSeccion>	
  	  						</ColumnasSeccion>
  	  		  		</SeccionPaises>
  	  		  	</SeccionIzquierda>
  	  		  	<SeccionTiposDeViaje>
  	  		  		<TituloSeccion>Tipos de Viaje</TituloSeccion>
  	  		  		{ 
  	  		  			TiposDeViajes.map(
  	  						(item, i) => {
  	  							if (item === 'Viajes en grupo') {
			  			  		return(
				  			  		<ContenedorInputSeccion key={i}>
				  				  		<input type="checkbox" id={"valueTipoDeViaje"+i} name={"valueTipoDeViaje"+i} checked/>
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
  	  					)
  	  		  		}
  	  		  	</SeccionTiposDeViaje>
  	  		  	<SeccionFechasPresupuesto>
  	  		  		<TituloSeccion>Mes de Salida</TituloSeccion>
  	  		  		<TituloSeccion>Presupuesto USD</TituloSeccion>
  	  		  		<InputRange valor='$' valor2='' numMin={0} numMax={10000} numMinValue={2000} numMaxValue={8000} step={50}/>
  	  		  		<TituloSeccion>Duración del programa</TituloSeccion>
  	  		  		<InputRange valor='' valor2=' días' numMin={0} numMax={30} numMinValue={2} numMaxValue={25} step={1}/>
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
