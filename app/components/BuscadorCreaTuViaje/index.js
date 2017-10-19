/**
*
* BuscadorCreaTuViaje
*
*/

import React from 'react';
import {
		BuscadorCreatur,
		SeccionTitulo, 
		TituloBuscador,
		LineaBuscador,
		SeccionIzquierda,
		InputsSecciones,
		SeccionDestinos,
		ColumnaDestinos,
		LineaSeccion,
		SeccionPaises,
		SeccionDerecha,
		TituloDestinos,
		} from './styled.js'

function BuscadorCreaTuViaje() {
  return (
    <BuscadorCreatur>
    	<SeccionTitulo>
    		<LineaBuscador />
    		<TituloBuscador> CREA TU VIAJE </TituloBuscador>
    		<LineaBuscador />
    	</SeccionTitulo>
    	<SeccionIzquierda>
	    	<SeccionDestinos>
	    		<TituloDestinos>Destinos</TituloDestinos>
	    		<InputsSecciones type="radio" id="valorDestino" name="valorDestino" value="valorDestino" />
	    		<label> Todos los destinos </label>
	    		<InputsSecciones type="radio" id="valorDestino" name="valorDestino" value="valorDestino" />
	    		<label> África </label>
	    		<InputsSecciones type="radio" id="valorDestino" name="valorDestino" value="valorDestino" />
	    		<label> Antártida </label>
	    		<InputsSecciones type="radio" id="valorDestino" name="valorDestino" value="valorDestino" />
	    		<label> Ártico </label>
	    		<InputsSecciones type="radio" id="valorDestino" name="valorDestino" value="valorDestino" />
	    		<label> Asia </label>
	    		<InputsSecciones type="radio" id="valorDestino" name="valorDestino" value="valorDestino" />
	    		<label> Australia & Nueva Zelanda </label>
	    		<InputsSecciones type="radio" id="valorDestino" name="valorDestino" value="valorDestino" />
	    		<label> Cuba </label>
	    		<InputsSecciones type="radio" id="valorDestino" name="valorDestino" value="valorDestino" />
	    		<label> Egipto </label>
	    		<InputsSecciones type="radio" id="valorDestino" name="valorDestino" value="valorDestino" />
	    		<label> India </label>
	    		<InputsSecciones type="radio" id="valorDestino" name="valorDestino" value="valorDestino" />
	    		<label> Europa </label>
	    		<InputsSecciones type="radio" id="valorDestino" name="valorDestino" value="valorDestino" />
	    		<label> América Latina </label>
	    		<InputsSecciones type="radio" id="valorDestino" name="valorDestino" value="valorDestino" />
	    		<label> Norteamérica </label>
	    	</SeccionDestinos>
	    	<LineaSeccion />
	    	<SeccionPaises>
	    		<TituloDestinos>Países</TituloDestinos>
	    		<InputsSecciones type="radio" id="valorPaises" name="valorPaises" value="valorPaises" />
	    		<label> Argentina </label>
	    		<InputsSecciones type="radio" id="valorPaises" name="valorPaises" value="valorPaises" />
	    		<label> Bolivia </label>
	    		<InputsSecciones type="radio" id="valorPaises" name="valorPaises" value="valorPaises" />
	    		<label> Brasil </label>
	    		<InputsSecciones type="radio" id="valorPaises" name="valorPaises" value="valorPaises" />
	    		<label> Chile </label>
	    		<InputsSecciones type="radio" id="valorPaises" name="valorPaises" value="valorPaises" />
	    		<label> Colombia </label>
	    		<InputsSecciones type="radio" id="valorPaises" name="valorPaises" value="valorPaises" />
	    		<label> Costa Rica </label>
	    		<InputsSecciones type="radio" id="valorPaises" name="valorPaises" value="valorPaises" />
	    		<label> Ecuador </label>
	    		<InputsSecciones type="radio" id="valorPaises" name="valorPaises" value="valorPaises" />
	    		<label> Nicaragua </label>
	    		<InputsSecciones type="radio" id="valorPaises" name="valorPaises" value="valorPaises" />
	    		<label> Perú </label>
	    		<InputsSecciones type="radio" id="valorPaises" name="valorPaises" value="valorPaises" />
	    		<label> México </label>
	    		<InputsSecciones type="radio" id="valorPaises" name="valorPaises" value="valorPaises" />
	    		<label> Costa Rica </label>
	    		<InputsSecciones type="radio" id="valorPaises" name="valorPaises" value="valorPaises" />
	    		<label> Ecuador </label>
	    		<InputsSecciones type="radio" id="valorPaises" name="valorPaises" value="valorPaises" />
	    		<label> Nicaragua </label>
	    		<InputsSecciones type="radio" id="valorPaises" name="valorPaises" value="valorPaises" />
	    		<label> Perú </label>
	    		<InputsSecciones type="radio" id="valorPaises" name="valorPaises" value="valorPaises" />
	    		<label> México </label>
	    	</SeccionPaises>
    	</SeccionIzquierda>
    	<SeccionDerecha>
    	</SeccionDerecha>
    	
    	
    </BuscadorCreatur>

  );
}

BuscadorCreaTuViaje.propTypes = {

};

export default BuscadorCreaTuViaje;
