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
		ColumnasSeccion,
		SeccionTiposDeViaje,
		SeccionFechasPresupuesto,
		SeccionBotones,
		BotonBuscadorAzul,
		BotonBuscadorNaranja
		} from './styled.js'
import InputRange from '../InputRange'
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

function BuscadorCreaTuViaje() {
  return (
  	<CreaturBuscador>
	  	<SeccionIzquierda>
	  		<SeccionDestinos>
	  		<TituloSeccion>Destinos</TituloSeccion>
	  		<ColumnasSeccion>
				<div>
			  		<InputsSecciones type="radio" id="valueDestinos" name="valueDestinos" value="valueDestinos" />
					<label> {Destinos[0]}</label>
				</div>
				<div>
			  		<InputsSecciones type="radio" id="valueDestinos" name="valueDestinos" value="valueDestinos" />
					<label> {Destinos[1]}</label>
				</div>
				<div>
			  		<InputsSecciones type="radio" id="valueDestinos" name="valueDestinos" value="valueDestinos" />
					<label> {Destinos[2]}</label>
				</div>
				<div>
					<InputsSecciones type="radio" id="valueDestinos" name="valueDestinos" value="valueDestinos" />
					<label> {Destinos[3]}</label>
				</div>
				<div>
					<InputsSecciones type="radio" id="valueDestinos" name="valueDestinos" value="valueDestinos" />
					<label> {Destinos[4]}</label>
				</div>
			</ColumnasSeccion>
			<ColumnasSeccion>
				<div>
					<InputsSecciones type="radio" id="valueDestinos" name="valueDestinos" value="valueDestinos" />
					<label> {Destinos[5]}</label>
				</div>
				<div>
			  		<InputsSecciones type="radio" id="valueDestinos" name="valueDestinos" value="valueDestinos" />
					<label> {Destinos[6]}</label>
				</div>
				<div>
			  		<InputsSecciones type="radio" id="valueDestinos" name="valueDestinos" value="valueDestinos" />
					<label> {Destinos[7]}</label>
				</div>
				<div>
			  		<InputsSecciones type="radio" id="valueDestinos" name="valueDestinos" value="valueDestinos" />
					<label> {Destinos[8]}</label>
				</div>
			</ColumnasSeccion>		
			<ColumnasSeccion>
				<div>
			  		<InputsSecciones type="radio" id="valueDestinos" name="valueDestinos" value="valueDestinos" />
					<label> {Destinos[9]}</label>
				</div>
				<div>
			  		<InputsSecciones type="radio" id="valueDestinos" name="valueDestinos" value="valueDestinos" />
					<label> {Destinos[10]}</label>
				</div>
				<div>
			  		<InputsSecciones type="radio" id="valueDestinos" name="valueDestinos" value="valueDestinos" />
					<label> {Destinos[11]}</label>
				</div>
			</ColumnasSeccion>
	  		</SeccionDestinos>
	  		<SeccionPaises>
	  			<TituloSeccion>Países</TituloSeccion>
				<ColumnasSeccion>
					<div>
				  		<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
						<label> {Paises[0]}</label>
					</div>	
					<div>
						<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
						<label> {Paises[1]}</label>
					</div>	 
					<div>
				  		<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
						<label> {Paises[2]}</label>
					</div>	
					<div>
						<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
						<label> {Paises[3]}</label>
					</div> 			
					<div>
				  		<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
						<label> {Paises[4]}</label>
					</div>
				</ColumnasSeccion>
				<ColumnasSeccion>
					<div>
						<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
						<label> {Paises[5]}</label>
					</div>	 
					<div>
				  		<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
						<label> {Paises[6]}</label>
					</div>	
					<div>
						<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
						<label> {Paises[7]}</label>
					</div>
					<div>
				  		<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
						<label> {Paises[8]}</label>
					</div>	
					<div>
						<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
						<label> {Paises[9]}</label>
					</div>	 
				</ColumnasSeccion>
				<ColumnasSeccion>
					<div>
				  		<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
						<label> {Paises[10]}</label>
					</div>	
					<div>
						<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
						<label> {Paises[11]}</label>
					</div>
					<div>
				  		<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
						<label> {Paises[12]}</label>
					</div>	
					<div>
						<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
						<label> {Paises[13]}</label>
					</div>	 
					<div>
				  		<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
						<label> {Paises[14]}</label>
					</div>	
				</ColumnasSeccion>
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
	  		<InputRange />
	  		<TituloSeccion>Duración del programa</TituloSeccion>
	  		<InputRange />
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
