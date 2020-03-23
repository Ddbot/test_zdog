import React, { useState, useEffect } from 'react';

import FranceFlag from './franceFlag';
import UKFlag from './ukFlag';

const LangToggle = (props) => {
// mettre lang dans localStorage depuis layout.
    let [lang, setState] = useState(props.lang);
    const flags = {
        fr: <FranceFlag />,
        en: <UKFlag />
    };

    let flag = document.querySelector('select')
    return (
        <>
            <div className="field">
                <div className="control">
                    <div className="select is-primary" onChange={props.toggleLang}>
                        <select onChange={props.toggleLang}>
                            <option>fr</option>
                            <option>en</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* {flags[lang]} */}
            {flags[props.lang]}
        </>
    );
};

export default LangToggle;
