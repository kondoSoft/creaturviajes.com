/**
*
* InputRange
*
*/

import React from 'react';
import 'react-input-range/lib/css/index.css';
import { InputContainer } from './styled';
import RangeInput from 'react-input-range';

// import styled from 'styled-components';

class InputRange extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			value: {
					min: this.props.numMinValue, 
					max: this.props.numMaxValue
				},
		}
	}
  render(){

	return (
	  <InputContainer>
	  	<RangeInput
	  	  		formatLabel={value => this.props.valor + `${value}` + this.props.valor2}
	  	        maxValue={this.props.numMax}
	  	        minValue={this.props.numMin}
	  	        step={this.props.step}
	  	        value={this.state.value}
	  	        onChange={value => this.setState({ value })} 
		/>
	  </InputContainer>
	)
    }
}

InputRange.propTypes = {

};

export default InputRange;
