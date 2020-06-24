import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage';

const AcceptanceField = (props) => {
        const { lang, error } = props;
    return <div className="field">
            <div className="control">
                <label className="checkbox">
                    <input type="checkbox" data-name="acceptance" onClick={props.onClick} />&nbsp;
                    { lang === 'en' ? <span>I agree to the <a href="#">terms and conditions</a></span> : <span>J'accepte les <a href="#">conditions d'utilisation</a></span>}                
                </label>
        </div>
        {!!error && <ErrorMessage errorCode={"missing-acceptance"} lang={lang}/>}
        </div>
}
export default AcceptanceField;

