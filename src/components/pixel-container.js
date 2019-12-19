import React, {Component} from 'react';
import {connect} from 'react-redux'

class PixelContainer extends Component {
  sendData = (e) => {
    e.preventDefault();
    const data = {
      id: new Date(),
    }
    this.props.dispatch({
      type:'ADD_POST',
      data});
  }
  render()
  {
    return (
      <div class="col">        
      <button class="btn btn-primary btn-block" onClick= {this.sendData}>Get Pixel Piece</button>
      <div class="progress-bar" role="progressbar" aria-valuenow={this.props.to_next_pixel} aria-valuemin="0" aria-valuemax="100" style={{width: this.props.to_next_pixel+'%', height:'30px'}}></div>
      <pre>{JSON.stringify(this.props)}</pre>
    </div>        
  );
  }      
}
const mapStateToProps = state => ({
  ...state
 })

export default connect(mapStateToProps)(PixelContainer);