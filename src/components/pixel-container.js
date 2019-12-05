import React from 'react';

const PixelContainer = (props) => {
    return (
        <div class="col">        
        <button class="btn btn-primary btn-block" onClick= {props.handlePieceClick}>Get Pixel Piece</button>
        <div class="progress-bar" role="progressbar" aria-valuenow={props.to_next_pixel} aria-valuemin="0" aria-valuemax="100" style={{width: props.to_next_pixel+'%', height:'30px'}}></div>              
      </div>        
    );  
    }

export default PixelContainer;