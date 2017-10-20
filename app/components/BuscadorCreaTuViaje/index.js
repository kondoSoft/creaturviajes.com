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
		InputsSecciones,
		SeccionDestinos,
		SeccionPaises,
		SeccionTiposDeViaje,
		SeccionFechasPresupuesto,
		SeccionBotones,
		BotonBuscadorAzul,
		BotonBuscadorNaranja
		} from './styled.js'

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

function BuscadorCreaTuViaje() {
  return (
  	<CreaturBuscador>
	  	<SeccionIzquierda>
	  		<SeccionDestinos>
	  		<TituloSeccion>Destinos</TituloSeccion>
	  		{
	  			Destinos.map(
	  				(item)=>{
	  					if (item === 'América Latina') {
			  				return(
				  				<div>
							  		<InputsSecciones type="radio" id="valueDestinos" name="valueDestinos" value="valueDestinos" checked/>
									<label> {item}</label>
								</div>
			  				)
	  					}else{
	  						return(
				  				<div>
							  		<InputsSecciones type="radio" id="valueDestinos" name="valueDestinos" value="valueDestinos" />
									<label> {item}</label>
								</div>
	  						)
	  					}
	  				}
	  				
	  			)
	  		}
	  		</SeccionDestinos>
	  		<SeccionPaises>
	  			<TituloSeccion>Países</TituloSeccion>
	  			{
	  				Paises.map(
	  					(item)=>{
	  						if (item === 'Argentina') {
			  					return(
				  					<div>
								  		<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" checked/>
										<label> {item}</label>
									</div>
			  					)
	  						}else{
			  					return(
				  					<div>
								  		<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
										<label> {item}</label>
									</div>
			  					)
	  						}
	  					}
	  				)
	  			}
	  		</SeccionPaises>
	  	</SeccionIzquierda>
	  	<SeccionTiposDeViaje>
	  		<TituloSeccion>Tipos de Viaje</TituloSeccion>
	  		{ 
	  			TiposDeViajes.map(
					(item) => {

			  			if (item === 'Viajes en grupo') {
		  			  		return(
			  			  		<div>
			  				  		<InputsSecciones type="radio" id="valueTipoDeViaje" name="valueTipoDeViaje" value="valueTipoDeViaje" checked/>
			  						<label> {item}</label>
			  					</div>
		  			  		)
				  		}else{
				  			return(
		  				  		<div>
		  					  		<InputsSecciones type="radio" id="valueTipoDeViaje" name="valueTipoDeViaje" value="valueTipoDeViaje"/>
		  							<label> {item}</label>
		  						</div>
				  			)
				  		}
			  		}
				)
	  		}
	  	</SeccionTiposDeViaje>
	  	<SeccionFechasPresupuesto>
	  		<TituloSeccion>Mes de Salida</TituloSeccion>
	  		<TituloSeccion>Presupuesto USD</TituloSeccion>
	  		<TituloSeccion>Duración del programa</TituloSeccion>
	  	</SeccionFechasPresupuesto>
	  	<SeccionBotones>
	  		<BotonBuscadorAzul>Ver opciones</BotonBuscadorAzul>
	  		<BotonBuscadorNaranja>Nueva búsqueda</BotonBuscadorNaranja>
	  	</SeccionBotones>
	</CreaturBuscador>
  );
}

BuscadorCreaTuViaje.propTypes = {

};

export default BuscadorCreaTuViaje;
