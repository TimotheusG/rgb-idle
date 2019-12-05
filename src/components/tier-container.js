import React, { Component } from 'react';
import Game from './game'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class TierContainer extends Component {   
    constructor(props){
        super(props);
    
        this.state = {tiers:[1, 2]};
      } 
    state = {
      };

      upgradeTier = () => {
        var highestTier = this.state.tiers[this.state.tiers.length-1];
        var newTier = highestTier + 1;
        this.setState(previousState => ({ tiers: [...previousState.tiers, newTier] }));
      };
    
  render() {
    return (
        <Tabs defaultActiveKey='1'>
        {this.state.tiers.map(tier=><Tab eventKey={tier} title={"Tier " + tier}><Game upgradeTier={this.upgradeTier}></Game></Tab>)}        
        </Tabs>
    );
  }
}

export default TierContainer;