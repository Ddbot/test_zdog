import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage';

const EmailField = (props) => {
    const { lang } = props;
    let [error, setError] = useState(null);
    return <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
            <input className="input is-danger" type="email" placeholder="Email input" data-name="email" required onChange={props.handleChange} />
            <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
            </span>
            <span className="icon is-small is-right" style={{ color: "red" }}>
                <i className="fa fa-exclamation-triangle"></i>
            </span>
        </div>
        {!!error && <ErrorMessage errorCode={error} />}
    </div>
}
export default EmailField;