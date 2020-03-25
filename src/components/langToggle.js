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
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                    { props.lang === 'en' ? <div><i class="fa fa-language" aria-hidden="true"></i> Languages</div> : <div><i class="fa fa-language" aria-hidden="true"></i> Langues</div> }
                    </a>

                    <div className="navbar-dropdown">
                            {props.lang === 'en' && <a className="navbar-item" data-lang={'fr'} onClick={props.toggleLang}>
                            Francais <FranceFlag />
                        </a>}
                        { props.lang === 'fr' && <a className="navbar-item" data-lang={'en'} onClick={props.toggleLang}>
                            English <UKFlag />
                        </a>}
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default LangToggle;
