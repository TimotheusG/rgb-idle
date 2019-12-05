import React from 'react';

const Welcome = (props) => {
  return(
      <div class='container'>
    <div class="row h1">Welcome To the Game!</div>
    <div class='row p'>This is a game where you earn Pixels, to purchase new Colors.</div>
    <div class='row p'>The Colors you are given are randomized.</div>
    <div class='row p'>To learn more, just start playing!</div>
    <div class='row'>
    <button onClick={props.onClick} class='btn btn-primary'>Start Game</button>
    </div>
    </div>
  )
}

export default Welcome;