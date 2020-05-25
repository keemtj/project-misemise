import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import MainDustState from '../Organisms/MainDustState';
import SubDustState from '../Organisms/SubDustState';

const DustTemplate = () => {
  const context = useContext(AppContext);
  const { dustState } = context;

  const allLocal = dustState.dustData;
  return (
    <div>
      {allLocal && <MainDustState />}
      <SubDustState />
    </div>
  );
};

export default DustTemplate;
