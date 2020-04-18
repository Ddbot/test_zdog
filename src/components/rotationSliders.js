import React from 'react';

const RotationSliders = (props) => {
    return (<div className="rotationSliders" style={{ height: 50, width: 50, zIndex: 10 }}>
        <input type="range" id="x" name="x" min="0" max="6.28" step="0.01" onChange={props.handleRotation}/>
        <label htmlFor="x">x</label>
        <input type="range" id="y" name="x" min="0" max="6.28" step="0.01" onChange={props.handleRotation}/>
        <label htmlFor="x">y</label>
        <input type="range" id="z" name="x" min="0" max="6.28" step="0.01" onChange={props.handleRotation}/>
        <label htmlFor="x">z</label>
      </div>);
}

export default RotationSliders;

