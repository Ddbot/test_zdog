import React from 'react';

const LangContext = React.createContext('fr');

export const LangProvider = LangContext.Provider;
export const LangConsumer = LangContext.Consumer;

export default LangContext;