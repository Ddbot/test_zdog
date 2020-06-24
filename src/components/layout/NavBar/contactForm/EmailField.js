import React, { useState } from 'react';
import ErrorMessage from '../../../ErrorMessage';

const EmailField = (props) => {
    const { lang, error } = props;
    return <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder={lang === "en" ? "Email input" : "Votre adresse email"} data-name="email" name="email" required onChange={props.onChange} />
            <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
            </span>
            {!!error && <span className="icon is-small is-right" style={{ color: "red" }}>
                <i className="fa fa-exclamation-triangle"></i>
            </span>}
        </div>
        {!!error ? <ErrorMessage errorCode={"missing-email"} lang={lang} /> : <ErrorMessage lang={lang} style={{ visibility: "hidden" }} />}
    </div>
}
export default EmailField;