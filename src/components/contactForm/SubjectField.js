import React, { useState, useEffect } from 'react';
import ErrorMessage from '../ErrorMessage';

const SubjectField = (props) => {
    const { lang } = props;
    let [locale, setLocale] = useState(props.lang);
    let [error, setError] = useState(null);


    useEffect(() => { 
        setLocale(prev => { 
            return lang
        });
    }, [lang]);

    return <div className="field">
        <label className="label">{lang === "en" ? 'Subject' : 'Objet'}</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Subject input" data-name="objet" onChange={props.handleChange}/>  
                </div>
            </div>
}
export default SubjectField;

