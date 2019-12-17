import React, { Component } from 'react';
import Color from '../models/color';
import Score from './score';
import ColorContainer from './color-container'
import PixelContainer from './pixel-container'
import { connect } from 'react-redux';
import { simpleAction } from '../actions/simpleAction';


class Game extends Component {
  constructor(props){
    super(props);

    if(props.default)
    {
      this.state = {colors: [], pixels: 100, to_next_pixel: 0, pixel_speed: 5, color_cost: 2, isUpgraded: false, upgradeTier: props.upgradeTier};
    }
    else
    {
      this.state = {colors: [], pixels: props.pixels, to_next_pixel: 0, pixel_speed: 5, color_cost: 2, isUpgraded: false, upgradeTier: props.upgradeTier};
    }
  }
  simpleAction = (event) => {
    this.props.simpleAction();
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

  addColor = () => {
    var a = Math.floor( Math.random() * 255);
    var b = Math.floor( Math.random() * 255);
    var c = Math.floor( Math.random() * 255);
    var col = new Color(a,b,c);
    const { color_cost, pixels } = this.state;
    if(pixels >= color_cost)
    {      
      this.setState(previousState => (
        {colors: [...previousState.colors, col.getColorString()], 
          pixels: pixels - color_cost, color_cost: color_cost + 1}
    )); 
    }    
  }

  handlePieceClick = () => {
    const { to_next_pixel, pixel_speed} = this.state;
    this.setState(() => ({
      to_next_pixel: (to_next_pixel + pixel_speed)
    }));
    this.props.simpleAction();
    this.checkToPixels();
  }

  handleUpgrade = () => {
    this.state.upgradeTier(this.state.colors.length);
    this.setState(
      {isUpgraded: true}
    )
  }


  render() {
    const isGreater = (this.state.colors.length > 5 && !this.state.isUpgraded);

    return (
      <div class="container">
        <div class="row">
        </div>
        <Score to_next_pixel={this.state.to_next_pixel} pixels={this.state.pixels} colors_length={this.state.colors.length}></Score>
        <div class="row">      
              <PixelContainer to_next_pixel={this.state.to_next_pixel} handlePieceClick={this.handlePieceClick}></PixelContainer>
  <ColorContainer addColor={this.addColor} pixels={this.state.pixels} color_cost={this.state.color_cost} colors={this.state.colors}></ColorContainer>
  {isGreater ? (<button onClick={this.handleUpgrade} class="btn btn-secondary">Upgrade Tier</button>) : (<div></div>) }
    </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 })
 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

export default connect(mapStateToProps, mapDispatchToProps) (Game);