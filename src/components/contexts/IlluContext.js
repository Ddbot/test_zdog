import React from 'react';

const IlluContext = React.createContext();

export const IlluProvider = IlluContext.Provider;
export const IlluConsumer = IlluContext.Consumer;

export default IlluContext;