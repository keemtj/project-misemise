import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';

const DgreeText = () => {
  const context = useContext(AppContext);
  const { weatherState } = context;

  const dgreeState = weatherState.T3H[0] ? +weatherState.T3H[0].value : 0;

  return <strong>{dgreeState}도</strong>;
};

export default DgreeText;
