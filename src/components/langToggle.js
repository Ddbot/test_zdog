import React from 'react';

import FranceFlag from './franceFlag';
import UKFlag from './ukFlag';

const LangToggle = (props) => {

    return (
        <>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                    { props.lang === 'en' ? <div><i className="fa fa-language" aria-hidden="true"></i>&nbsp;&nbsp;Languages</div> : <div><i className="fa fa-language" aria-hidden="true"></i>&nbsp;&nbsp;Langues</div> }
                    </a>

                    <div className="navbar-dropdown">
                            {props.lang === 'en' && <a href={'#'}className="navbar-item" data-lang={'fr'} onClick={props.toggleLang} onKeyPress={props.toggleLang}>
                            Francais <FranceFlag />
                        </a>}
                        { props.lang === 'fr' && <a href={'#'}className="navbar-item" data-lang={'en'} onClick={props.toggleLang} onKeyPress={props.toggleLang}>
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
