import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Welcome from './welcome'
import TierContainer from './tier-container'

class GameContainer extends Component {    
    state = {
        selectedIndex: "welcome"
      };
    
      handleSelect = index => {
        this.setState({ selectedIndex: index });
      };
    
      handleButtonClick = () => {
        this.setState({ selectedIndex: "game" });
      };

  render() {
    return (
      <Tabs activeKey={this.state.selectedIndex} onSelect={this.handleSelect} defaultActiveKey='welcome'>
        <Tab eventKey="welcome">
        <Welcome onClick={this.handleButtonClick}></Welcome>
      </Tab>
      <Tab eventKey="game" title="RBG">   
      <TierContainer></TierContainer>
      </Tab>      
        <Tab eventKey="settings" title="settings">
            <div>More to come here</div>
        </Tab>        
      </Tabs>
    );
  }
}

export default GameContainer;