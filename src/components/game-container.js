import React, { Component } from 'react';
import Game from './game'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Welcome from './welcome'

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
        <Tab eventKey="welcome" title='Welcome'>
        <Welcome onClick={this.handleButtonClick}></Welcome>
      </Tab>
      <Tab eventKey="game" title="RBG">   
      <Game></Game>
      </Tab>      
        <Tab eventKey="settings" title="settings">
        <Game></Game>
        </Tab>        
      </Tabs>
    );
  }
}

export default GameContainer;