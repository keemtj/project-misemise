/* eslint-disable react/prop-types */
import React, { createContext } from 'react';
import useDust from '../Hook/useDust';
import { initialDustState } from '../Reducer/reducer';

const DustContext = createContext(initialDustState);

const DustProvider = ({ children }) => {
  const [state, fetchDustData, dustLevel] = useDust();

  const data = {
    state,
    fetchDustData,
    dustLevel,
  };
  return <DustContext.Provider value={data}>{children}</DustContext.Provider>;
};

export { DustContext, DustProvider };
