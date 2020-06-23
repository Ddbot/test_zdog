import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage';

const MessageField = (props) => {
        const { lang } = props;
    let [error, setError] = useState(null);
    return <div className="field">
            <label className="label">Message</label>
            <div className="control">
            <textarea className="textarea" placeholder="Textarea" data-name="message" onChange={props.handleChange}></textarea>
            {!!error && <ErrorMessage />}
            </div>
        </div>
}
export default MessageField;

