import React, { createContext, useState, useContext } from 'react';

const TitleContext = createContext();

export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState('Geo Gems - Exquisite Jewelry');

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export const useTitle = () => useContext(TitleContext);