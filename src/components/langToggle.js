import React from 'react';

import FranceFlag from './franceFlag';
import UKFlag from './ukFlag';

const LangToggle = (props) => {
    const flags = {
        fr: <FranceFlag />,
        en: <UKFlag />
    };

    return (
        <>
            <div className="field" style={{ fontFamily: "Roboto" }}>
                <div className="control">
                    <div className="select is-primary" onBlur={props.toggleLang} role={'checkbox'} aria-checked>
                        <select onChange={props.toggleLang}>
                            <option style={{ fontFamily: "Roboto" }}>fr</option>
                            <option style={{ fontFamily: "Roboto" }}>en</option>
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
