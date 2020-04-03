import React from 'react';

import FranceFlag from './franceFlag';
import UKFlag from './ukFlag';

const LangToggle = (props) => {

    return (
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
                <div className="navbar-item has-dropdown is-hoverable">
                    <button className="navbar-link">
                    { props.lang === 'en' ? <div><i className="fa fa-language" aria-hidden="true"></i>&nbsp;&nbsp;Languages</div> : <div><i className="fa fa-language" aria-hidden="true"></i>&nbsp;&nbsp;Langues</div> }
                    </button>

                    <div className="navbar-dropdown">
                            {props.lang === 'en' && <button href={'#'}className="navbar-item" data-lang={'fr'} onClick={props.toggleLang} onKeyPress={props.toggleLang}>
                            Francais <FranceFlag />
                        </button>}
                        { props.lang === 'fr' && <button href={'#'}className="navbar-item" data-lang={'en'} onClick={props.toggleLang} onKeyPress={props.toggleLang}>
                            English <UKFlag />
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LangToggle;
