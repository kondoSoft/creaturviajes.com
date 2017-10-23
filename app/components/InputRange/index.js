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
			value: {min: 2, max: 10},
		}
	}
  render(){

	return (
	  <InputContainer>
	  	<RangeInput
	  	        maxValue={20}
	  	        minValue={0}
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
