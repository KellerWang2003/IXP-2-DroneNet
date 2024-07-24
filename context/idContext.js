// idContext.js
import React, { createContext, useState } from 'react';

const IdContext = createContext();

const IdProvider = ({ children }) => {
  const [id, setId] = useState(null);

  return (
    <IdContext.Provider value={{ id, setId }}>
      {children}
    </IdContext.Provider>
  );
};

export { IdContext, IdProvider };
