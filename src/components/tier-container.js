import React, { Component } from 'react';
import Game from './game'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class TierContainer extends Component {   
    constructor(props){
        super(props);
    
        this.state = {tiers:[{level:1, speed:5}], newPixels: 0};
      } 

      upgradeTier = (colorsCount) => {
        var highestTier = this.state.tiers[this.state.tiers.length-1];
        var newTier = highestTier + 1;
        this.setState(previousState => ({ tiers: {level: [...previousState.tiers, newTier], speed: 5}, newPixels: colorsCount}));
      };
    
  render() {
    return (
        <Tabs defaultActiveKey='1'>
        {this.state.tiers.map(tier=>
        <Tab eventKey={tier.level} title={"Tier " + tier.level}>
          {tier.level == 1 ?
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