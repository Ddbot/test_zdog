import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage';

const NameField = (props) => {
    const { lang, error } = props;
    return <div className="field">
            <label className="label">{lang === 'en' ? 'Name' : 'Nom' }</label>
            <div className="control">
                <input className="input" type="text" placeholder={lang === 'en' ? 'What name should we call you ?' : 'Comment vous appelez-vous ?' } data-name="name" name="userName" onChange={props.onCHange} />
            {!!error && <ErrorMessage errorCode={"user-name-required"} lang={lang} />}
            </div>
    </div>}
export default NameField;