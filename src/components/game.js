import React, { Component } from 'react';
import Score from './score';
import ColorContainer from './color-container'
import PixelContainer from './pixel-container'
import { connect } from 'react-redux';


class Game extends Component {
  constructor(props) {
    super(props);

    this.state = { id: props.id };
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.once_a_second();
    }, 1000)
  }

  once_a_second() {
    this.props.dispatch({
      type: 'UPDATE_PIXEL',
      id: this.props.id
    });
  }

  handleUpgrade = () => {
    this.props.dispatch({
      type: 'ADD_TIER',
      id: this.props.id
    });
    this.props.dispatch({
      type: 'UPGRADE',
      id: this.props.id
    });
  }

  render() {
    const isGreater = (this.props[this.state.id].colors.length > 5 && !this.props[this.state.id].isUpgraded);

    return (

      <div class="container">
        <div class="row">
        </div>
        <Score to_next_pixel={this.props[this.state.id].to_next_pixel} pixels={this.props[this.state.id].pixels} colors_length={this.props[this.state.id].colors.length}></Score>
        <div class="row">
          <PixelContainer to_next_pixel={this.props[this.state.id].to_next_pixel} id={this.state.id}></PixelContainer>
          <ColorContainer id={this.state.id}></ColorContainer>
          {isGreater ? (<button onClick={this.handleUpgrade} class="btn btn-secondary">Upgrade Tier</button>) : (<div></div>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.tierReducer.tiers
})

export default connect(mapStateToProps)(Game);