import React from 'react';

const Welcome = (props) => {
  return(
      <div>
    <div class="h1">Welcome To the Game!</div>
    <div class='p'>This is a game where you earn Pixels, to purchase new Colors.</div>
    <div class='p'>The Colors you are given are randomized.</div>
    <div class='p'>To learn more, just start playing!</div>
    <button onClick={props.onClick} class='btn btn-primary'>Start Game</button>
    </div>
  )
}

export default Welcome;