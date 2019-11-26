import React, { Component } from 'react';
import NameDisplay from './name_display';
import NameField from './name_field';
import Color from '../models/color'


class Game extends Component {
  constructor(props){
    super(props);

    this.state = {name: 'abc', colors: ['#ff0000', '#00ff00', '#0000ff']};
  }
  handleChange(param) {
    this.setState({name: param});
  }

  handleClick() {
    var a = Math.floor( Math.random() * 255);
    var b = Math.floor( Math.random() * 255);
    var c = Math.floor( Math.random() * 255);
    var col = new Color(a,b,c);
    this.setState(previousState => (
        {colors: [...previousState.colors, col.getColorString()]}
    )); 
  }

  render() {

    return (
      <div>
          <button onClick= {(event) => this.handleClick(event)}>Add New Color</button>
        <NameDisplay name={this.state.name} />        
        <NameField name={this.state.name} handleChange={(event) => this.handleChange(event)}/>
    {this.state.colors.map(color => <button disabled style={{backgroundColor: color}}>{color}</button>)}
        
      </div>
    );
  }
}

export default Game;