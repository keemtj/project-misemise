import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import DustTemplate from '../Components/Templates/DustTemplate';

const Dust = () => {
  const dustContext = useContext(AppContext);
  const { dustState } = dustContext;

  console.log('[dustState]', dustState);

  return (
    <div>
      <DustTemplate />
    </div>
  );
};

export default Dust;
