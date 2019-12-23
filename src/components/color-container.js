import React, { Component } from 'react';
import { connect } from 'react-redux'

class ColorContainer extends Component {
  addColor = (e) => {
    e.preventDefault();
    this.props.dispatch({
      type: 'ADD_COLOR', id: this.props.id
    });
  }
  render() {
    return (
      <div class="col">
        <div class="row">
          <button id="color-btn" class="btn btn-primary btn-block" disabled={this.props.pixels < this.props.color_cost} onClick={this.addColor}>Add New Color (Cost: {this.props.color_cost} Pixels)</button>
        </div>
        <div class="row">
          {this.props[this.props.id].colors.map(color => <button class="btn btn-color" style={{ backgroundColor: color }}>{color}</button>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.tierReducer.tiers
 })

export default connect(mapStateToProps)(ColorContainer);