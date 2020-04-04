import React from 'react';

const defaultLang = Array.from(navigator.language).slice(0, 2).join('') || 'en';

const LangContext = React.createContext(defaultLang);


export const LangProvider = LangContext.Provider;
export const LangConsumer = LangContext.Consumer;

export default LangContext;