import React from 'react';

const locale = {
    lang: 'fr',
    setLang: () => { }
}

const LangContext = React.createContext(locale);


export const LangProvider = LangContext.Provider;
export const LangConsumer = LangContext.Consumer;

export default LangContext;