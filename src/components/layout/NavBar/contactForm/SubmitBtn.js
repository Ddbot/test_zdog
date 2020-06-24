import React, { useState } from 'react';
import { Link } from 'gatsby';
import ErrorMessage from '../../../ErrorMessage';

const SubmitBtn = (props) => {
    let [error, setError] = useState(null);
    return <div className="field is-grouped">
            <div className="control">
                <button className="button is-link" onClick={props.handleSubmit}>Submit</button>
            </div>
            <div className="control">
                <button className="button is-link is-light"><Link to="/">Cancel</Link></button>
        </div>
        {!!error && <ErrorMessage />}
        </div>
}
export default SubmitBtn;

