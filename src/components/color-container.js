import React from 'react';

const ColorContainer = (props) => {
    return (
            <div class="col">
          <div class="row">
        <button id="color-btn" class="btn btn-primary btn-block" disabled={props.pixels < props.color_cost} onClick= {props.addColor}>Add New Color (Cost: {props.color_cost} Pixels)</button>
        </div>
        <div class="row">
    {props.colors.map(color => <button class="btn btn-color" style={{backgroundColor: color}}>{color}</button>)}
    </div>
    </div>
    );
  
    }

export default ColorContainer;