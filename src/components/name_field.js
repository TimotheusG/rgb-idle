import React, { Component } from 'react';

class NameField extends Component {
  render(){
    return(
      <div>
        <input type='text' onChange={(event)=>this.props.handleChange(event.target.value) }></input>
      </div>
    )
  }
  
};

export default NameField;