import React, { Component } from 'react';
import Game from './game'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tier from '../models/tier'
import Tiers from '../models/tiers'

class TierContainer extends Component {   
    constructor(props){
        super(props);
        var t = new Tiers(new Tier());    
        this.state = {tiers: t.stack, newPixels: 0};
      } 

      upgradeTier = (colorsCount) => {
        var highestTier = this.state.tiers[this.state.tiers.length-1];
        var newTierNumber = highestTier.tier_number + 1;
        var newTier = new Tier(highestTier.colors.length,newTierNumber);
        this.setState(previousState => ({ tiers:[...previousState.tiers, newTier]}));
      };
    
  render() {
    return (
        <Tabs defaultActiveKey='1'>
        {this.state.tiers.map(tier=>
        <Tab eventKey={tier.tier_number} title={tier.tier_name}>
          {tier.tier_number === 1 ?
          <Game upgradeTier={this.upgradeTier} default={true}></Game>
          :
          <Game upgradeTier={this.upgradeTier} default={false} pixels={this.state.newPixels}></Game>
  }
          </Tab>
          )}        
        </Tabs>
    );
  }
}

export default TierContainer;