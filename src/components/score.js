import React from 'react';
import Display from './display'

const Score = ({ to_next_pixel, pixels, colors_length}) => {
  return(
    <div class="row">
        <div class="col">
          <Display text="To Next Pixel" value={to_next_pixel}></Display>
          </div>
          <div class="col">
          <Display text="Pixels" value={pixels}></Display>
          </div>
          <div class="col"> 
          <Display text="Colors" value={colors_length}></Display>
          </div>
          </div>
  )
}

export default Score;


