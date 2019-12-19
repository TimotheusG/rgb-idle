import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameContainer from './components/game-container'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>        
        <pre>
 {
  JSON.stringify(this.props)
 }
</pre>
        <GameContainer></GameContainer>
      </div>
      
    );
  }
}
const mapStateToProps = state => ({
  ...state
 })


export default connect(mapStateToProps)(App);