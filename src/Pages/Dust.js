import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import DustTemplate from '../Components/Templates/DustTemplate';
import './style/Dust.css';

const Dust = () => {
  const dustContext = useContext(AppContext);
  const { dustState } = dustContext;

  console.log('[dustState]', dustState);

  return (
    <div className="dust-page">
      <DustTemplate />
    </div>
  );
};

export default Dust;
