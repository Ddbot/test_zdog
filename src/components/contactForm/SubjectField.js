import React, { useState, useEffect } from 'react';
import ErrorMessage from '../ErrorMessage';

const SubjectField = (props) => {
    const { lang, error } = props;
    let [locale, setLocale] = useState(props.lang);

    useEffect(() => { 
        setLocale(prev => { 
            return lang
        });
    }, [lang]);

    return <div className="field">
        <label className="label">{lang === "en" ? 'Subject' : 'Objet'}</label>
                <div className="control">
                    <input className="input" type="text" placeholder={locale === "en" ? "Subject input" : "Objet du message"} data-name="objet" name="objet"onChange={props.onChange}/>  
                </div>
            </div>
}
export default SubjectField;

