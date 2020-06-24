import React from 'react';

const FilterSliders = (props) => {
    return (<div className="filterSliders">
        <label htmlFor="hue">Hue rotate</label><br />
        <input type="range" className="hue-rotate" name="hue" min="0" max="360" step="1" onChange={props.handleFilter}/><br />
        <label htmlFor="grayscale">Gray scale</label><br />
        <input type="range" className="grayscale" name="grayscale" min="0" max="1" step="0.1" onChange={props.handleFilter}/><br />
        <label htmlFor="invert">Invert</label><br />
        <input type="range" className="invert" name="invert" min="0" max="1" step="0.1" onChange={props.handleFilter}/><br />
        <label htmlFor="contrast">Contrast</label>        <br />
        <input type="range" className="contrast" name="contrast" min="0" max="10" step="0.1" onChange={props.handleFilter}/><br />
        {/* <input type="range" className="x" name="x" min="-50" max="50" step="0.01" onChange={props.handleTranslation}/>
        <label htmlFor="x">x</label>
        <input type="range" className="y" name="y" min="-50" max="50" step="0.01" onChange={props.handleTranslation}/>
        <label htmlFor="y">y</label>
        <input type="range" className="z" name="z" min="0" max="7" step="0.01" onChange={props.handleTranslation}/>
        <label htmlFor="z">z</label>       */}
      </div>);
}

export default FilterSliders;

