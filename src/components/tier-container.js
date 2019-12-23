import React, { Component } from 'react';
import Game from './game'
import {connect} from 'react-redux'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class TierContainer extends Component {   

      // upgradeTier = (colorsCount) => {
      //   var highestTier = this.state.tiers[this.state.tiers.length-1];
      //   var newTier = highestTier + 1;
      //   this.setState(previousState => ({ tiers:[...previousState.tiers, newTier],newPixels: colorsCount}));
      // };
    
  render() {
    return (
        <Tabs defaultActiveKey='0'>
        {this.props.tiers.map(tier=>
        <Tab eventKey={tier.id} title={"Tier " + (tier.id+1)}>
          {tier.id === 0 ?
          <Game id={tier.id}></Game>
          :
          <Game pixels={0} id={tier.id}></Game>
          }
          </Tab>
          )}        
        </Tabs>
    );
  }
}

const mapStateToProps = state => ({
  ...state.tierReducer
 })

export default connect(mapStateToProps)(TierContainer);