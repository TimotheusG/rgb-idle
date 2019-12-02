import React, { Component } from 'react';
import Color from '../models/color'
import Display from './display'


class Game extends Component {
  constructor(props){
    super(props);

    this.state = {name: 'abc', colors: [], pixels: 100, to_next_pixel: 0, pixel_speed: 1, color_cost: 5};
    //'#ff0000', '#00ff00', '#0000ff'
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.once_a_second();
    }, 1000)
  }

  once_a_second()
  {
    const { to_next_pixel, pixel_speed } = this.state;
    this.setState(() => ({
      to_next_pixel: (to_next_pixel + pixel_speed)
    }));
    this.checkToPixels();
  }

  checkToPixels() {
    const { pixels, to_next_pixel } = this.state;
    if(to_next_pixel >= 100)
    {
      this.setState(() => ({
        to_next_pixel: to_next_pixel - 100,
        pixels: pixels + 1
      }));
    }
  }

  handleChange(param) {
    this.setState({name: param});
  }

  handleClick() {
    var a = Math.floor( Math.random() * 255);
    var b = Math.floor( Math.random() * 255);
    var c = Math.floor( Math.random() * 255);
    var col = new Color(a,b,c);
    const { color_cost, pixels } = this.state;
    if(pixels >= color_cost)
    {      
      this.setState(previousState => (
        {colors: [...previousState.colors, col.getColorString()], pixels: pixels - color_cost, color_cost: color_cost + 1}
    )); 
    }
    
  }

  handlePieceClick() {
    const { to_next_pixel} = this.state;
    this.setState(() => ({
      to_next_pixel: (to_next_pixel + 1)
    }));
    this.checkToPixels();
  }

  render() {

    return (
      <div class="container">
        <div class="row">
        <div class="col">
          <Display text="To Next Pixel" value={this.state.to_next_pixel}></Display>
          </div>
          <div class="col">
          <Display text="Pixels" value={this.state.pixels}></Display>
          </div>
          <div class="col"> 
          <Display text="Colors" value={this.state.colors.length}></Display>
          </div>
          </div>
        <div class="row">
          <div class="col">        
          <button class="btn btn-primary btn-block" onClick= {(event) => this.handlePieceClick(event)}>Get Pixel Piece</button>
          <div class="progress-bar" role="progressbar" aria-valuenow={this.state.to_next_pixel} aria-valuemin="0" aria-valuemax="100" style={{width: this.state.to_next_pixel+'%', height:'30px'}}></div>              
        </div>          
        <div class="col">
          <div class="row">
        <button id="color-btn" class="btn btn-primary btn-block" disabled={this.state.pixels < this.state.color_cost} onClick= {(event) => this.handleClick(event)}>Add New Color (Cost: {this.state.color_cost} Pixels)</button>
        </div>
        <div class="row">
    {this.state.colors.map(color => <button class="btn btn-color" disabled style={{backgroundColor: color}}>{color}</button>)}
    </div>
    </div>
    </div>
      </div>
    );
  }
}

export default Game;