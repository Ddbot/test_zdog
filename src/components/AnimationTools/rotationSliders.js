import React from 'react';

const RotationSliders = (props) => {
    return (<div className="rotationSliders">
        <input type="range" className="x" name="x" min="0" max="6.28" step="0.01" onChange={props.handleRotation}/>
        <label htmlFor="x">x</label>
        <input type="range" className="y" name="y" min="0" max="6.28" step="0.01" onChange={props.handleRotation}/>
        <label htmlFor="y">y</label>
        <input type="range" className="z" name="z" min="0" max="6.28" step="0.01" onChange={props.handleRotation}/>
        <label htmlFor="z">z</label>
        <input type="range" className="x" name="x" min="-50" max="50" step="0.01" onChange={props.handleTranslation}/>
        <label htmlFor="x">x</label>
        <input type="range" className="y" name="y" min="-50" max="50" step="0.01" onChange={props.handleTranslation}/>
        <label htmlFor="y">y</label>
        <input type="range" className="z" name="z" min="0" max="7" step="0.01" onChange={props.handleTranslation}/>
        <label htmlFor="z">z</label>      
      </div>);
}

export default RotationSliders;

