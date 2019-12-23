import React, {Component} from 'react';
import {connect} from 'react-redux'

class PixelContainer extends Component {
  updatePixel = (e) => {
    e.preventDefault();
    this.props.dispatch({
      type:'UPDATE_PIXEL', id: this.props.id});
  }
  render()
  {
    return (
      <div class="col">        
      <button class="btn btn-primary btn-block" onClick= {this.updatePixel}>Get Pixel Piece</button>
      <div class="progress-bar" role="progressbar" aria-valuenow={this.props.to_next_pixel} aria-valuemin="0" aria-valuemax="100" style={{width: this.props.to_next_pixel+'%', height:'30px'}}></div>
    </div>        
  );
  }      
}

const mapStateToProps = state => ({
  ...state.tierReducer.tiers
 })

export default connect(mapStateToProps)(PixelContainer);