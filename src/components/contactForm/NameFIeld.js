import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage';

const NameField = (props) => {
    const { lang } = props;
    let [error, setError] = useState(null);
    return <div className="field">
            <label className="label">{lang === 'en' ? 'Name' : 'Nom' }</label>
            <div className="control">
                <input className="input" type="text" placeholder="Text input" data-name="name" name="userName" onChange={props.onCHange} />
                {!!error && <ErrorMessage errorCode={error} />}
            </div>
    </div>}
export default NameField;