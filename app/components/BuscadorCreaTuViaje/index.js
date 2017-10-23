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
		InputsSecciones,
		SeccionDestinos,
		SeccionPaises,
		ColumnasSeccion,
		SeccionTiposDeViaje,
		SeccionFechasPresupuesto,
		SeccionBotones,
		BotonBuscadorAzul,
		BotonBuscadorNaranja,
		style
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

class BuscadorCreaTuViaje extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = { checked: false};
	}

	Destino(item){
		const {checked} = this.state
		const value = item.target.checked
		console.log(checked)
		this.setState({
			checked: value
		})
			//document.getElementById('').style.color = 'orange'
	}
  render(){
  	  return (
  	  	<form>
  	  	  	  	<CreaturBuscador>
  	  	  		  	<SeccionIzquierda>
  	  	  		  		<SeccionDestinos>
  	  	  		  		<TituloSeccion>Destinos</TituloSeccion>
  	  	  		  		<ColumnasSeccion>
  	  	  					<ContenedorInputSeccion>
  	  	  				  		<InputsSecciones onChange={(item)=>this.Destino(item)} type="radio" name="valueDestinos" value={Destinos[0]} />
  	  	  						<label> {Destinos[0]}</label>
  	  	  					</ContenedorInputSeccion>
  	  	  					<ContenedorInputSeccion>
  	  	  				  		<InputsSecciones onChange={(item)=>this.Destino(item)} type="radio" name="valueDestinos" value={Destinos[1]} />
  	  	  						<label> {Destinos[1]}</label>
  	  	  					</ContenedorInputSeccion>
  	  	  					<ContenedorInputSeccion>
  	  	  				  		<InputsSecciones type="radio" name="valueDestinos" value={Destinos[2]} />
  	  	  						<label> {Destinos[2]}</label>
  	  	  					</ContenedorInputSeccion>
  	  	  					<ContenedorInputSeccion>
  	  	  						<InputsSecciones type="radio" name="valueDestinos" value={Destinos[3]} />
  	  	  						<label> {Destinos[3]}</label>
  	  	  					</ContenedorInputSeccion>
  	  	  					<ContenedorInputSeccion>
  	  	  						<InputsSecciones type="radio" name="valueDestinos" value={Destinos[4]} />
  	  	  						<label> {Destinos[4]}</label>
  	  	  					</ContenedorInputSeccion>
  	  	  				</ColumnasSeccion>
  	  	  				<ColumnasSeccion>
  	  	  					<ContenedorInputSeccion>
  	  	  						<InputsSecciones type="radio" name="valueDestinos" value={Destinos[5]} />
  	  	  						<label> {Destinos[5]}</label>
  	  	  					</ContenedorInputSeccion>
  	  	  					<ContenedorInputSeccion>
  	  	  				  		<InputsSecciones type="radio" name="valueDestinos" value={Destinos[6]} />
  	  	  						<label> {Destinos[6]}</label>
  	  	  					</ContenedorInputSeccion>
  	  	  					<ContenedorInputSeccion>
  	  	  				  		<InputsSecciones type="radio" name="valueDestinos" value={Destinos[7]} />
  	  	  						<label> {Destinos[7]}</label>
  	  	  					</ContenedorInputSeccion>
  	  	  					<ContenedorInputSeccion>
  	  	  				  		<InputsSecciones type="radio" name="valueDestinos" value={Destinos[8]} />
  	  	  						<label> {Destinos[8]}</label>
  	  	  					</ContenedorInputSeccion>
  	  	  				</ColumnasSeccion>		
  	  	  				<ColumnasSeccion>
  	  	  					<ContenedorInputSeccion>
  	  	  				  		<InputsSecciones type="radio" name="valueDestinos" value={Destinos[9]} />
  	  	  						<label> {Destinos[9]}</label>
  	  	  					</ContenedorInputSeccion>
  	  	  					<ContenedorInputSeccion>
  	  	  				  		<InputsSecciones type="radio" name="valueDestinos" value={Destinos[10]} checked />
  	  	  						<label> {Destinos[10]}</label>
  	  	  					</ContenedorInputSeccion>
  	  	  					<ContenedorInputSeccion>
  	  	  				  		<InputsSecciones type="radio" name="valueDestinos" value={Destinos[11]} />
  	  	  						<label> {Destinos[11]}</label>
  	  	  					</ContenedorInputSeccion>
  	  	  				</ColumnasSeccion>
  	  	  		  		</SeccionDestinos>
  	  	  		  		<SeccionPaises>
  	  	  		  			<TituloSeccion>Países</TituloSeccion>
  	  	  					<ColumnasSeccion>
  	  	  						<ContenedorInputSeccion>
  	  	  					  		<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" checked />
  	  	  							<label> {Paises[0]}</label>
  	  	  						</ContenedorInputSeccion>	
  	  	  						<ContenedorInputSeccion>
  	  	  							<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
  	  	  							<label> {Paises[1]}</label>
  	  	  						</ContenedorInputSeccion>	 
  	  	  						<ContenedorInputSeccion>
  	  	  					  		<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
  	  	  							<label> {Paises[2]}</label>
  	  	  						</ContenedorInputSeccion>	
  	  	  						<ContenedorInputSeccion>
  	  	  							<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
  	  	  							<label> {Paises[3]}</label>
  	  	  						</ContenedorInputSeccion> 			
  	  	  						<ContenedorInputSeccion>
  	  	  					  		<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
  	  	  							<label> {Paises[4]}</label>
  	  	  						</ContenedorInputSeccion>
  	  	  					</ColumnasSeccion>
  	  	  					<ColumnasSeccion>
  	  	  						<ContenedorInputSeccion>
  	  	  							<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
  	  	  							<label> {Paises[5]}</label>
  	  	  						</ContenedorInputSeccion>	 
  	  	  						<ContenedorInputSeccion>
  	  	  					  		<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
  	  	  							<label> {Paises[6]}</label>
  	  	  						</ContenedorInputSeccion>	
  	  	  						<ContenedorInputSeccion>
  	  	  							<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
  	  	  							<label> {Paises[7]}</label>
  	  	  						</ContenedorInputSeccion>
  	  	  						<ContenedorInputSeccion>
  	  	  					  		<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
  	  	  							<label> {Paises[8]}</label>
  	  	  						</ContenedorInputSeccion>	
  	  	  						<ContenedorInputSeccion>
  	  	  							<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
  	  	  							<label> {Paises[9]}</label>
  	  	  						</ContenedorInputSeccion>	 
  	  	  					</ColumnasSeccion>
  	  	  					<ColumnasSeccion>
  	  	  						<ContenedorInputSeccion>
  	  	  					  		<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
  	  	  							<label> {Paises[10]}</label>
  	  	  						</ContenedorInputSeccion>	
  	  	  						<ContenedorInputSeccion>
  	  	  							<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
  	  	  							<label> {Paises[11]}</label>
  	  	  						</ContenedorInputSeccion>
  	  	  						<ContenedorInputSeccion>
  	  	  					  		<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
  	  	  							<label> {Paises[12]}</label>
  	  	  						</ContenedorInputSeccion>	
  	  	  						<ContenedorInputSeccion>
  	  	  							<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
  	  	  							<label> {Paises[13]}</label>
  	  	  						</ContenedorInputSeccion>	 
  	  	  						<ContenedorInputSeccion>
  	  	  					  		<InputsSecciones type="radio" id="valuePaises" name="valuePaises" value="valuePaises" />
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
  	  		  			  		return(
  	  			  			  		<ContenedorInputSeccion key={i}>
  	  			  				  		<InputsSecciones type="checkbox" id={"valueTipoDeViaje"+i} name="valueTipoDeViaje" onChange={(item)=>this.Destino(item)} />
  	  			  						<label style={this.state.checked === true ? style.input : style.input1 }> {item}</label>
  	  			  					</ContenedorInputSeccion>
  	  			  					)
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
  	  	  		  		<BotonBuscadorAzul>Ver opciones</BotonBuscadorAzul>
  	  	  		  		<BotonBuscadorNaranja>Nueva búsqueda</BotonBuscadorNaranja>
  	  	  		  	</SeccionBotones>
  	  	  		</CreaturBuscador>
  	  	</form>
  	  );
  }
}

BuscadorCreaTuViaje.propTypes = {

};

export default BuscadorCreaTuViaje;
