import React from 'react';

import FranceFlag from '../../../images/franceFlag';
import UKFlag from '../../../images/ukFlag';

const LangToggle = (props) => {

    return (
        <div className="navbar-menu">
            <div className="navbar-end">
                <div className="navbar-item has-dropdown is-hoverable">
                    <button className="navbar-link">
                    { props.lang === 'en' ? <div><i className="fa fa-language" aria-hidden="true"></i>&nbsp;&nbsp;Languages</div> : <div><i className="fa fa-language" aria-hidden="true"></i>&nbsp;&nbsp;Langues</div> }
                    </button>
                    <div className="navbar-dropdown">
                            {props.lang === 'en' && <button href={'#'}className="navbar-item" data-lang={'fr'} onClick={props.toggleLang} onKeyPress={props.toggleLang}>
                            Francais <FranceFlag data-lang={'fr'}/>
                        </button>}
                        { props.lang === 'fr' && <button href={'#'}className="navbar-item" data-lang={'en'} onClick={props.toggleLang} onKeyPress={props.toggleLang}>
                            English <UKFlag data-lang={'en'}/>
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LangToggle;
