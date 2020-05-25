import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { Smile } from '../../Util/faIcon';

const MainDustState = () => {
  const context = useContext(AppContext);
  const { dustState, dustLevel, locationState } = context;
  const { addr } = locationState;
  const { dustData } = dustState;
  const localIndex = dustData.findIndex((d) => d.MSRSTE_NM === '성동구');
  const localDustPM10 = dustData[localIndex] ? dustLevel(dustData[localIndex].PM10) : '';

  console.log(localDustPM10);

  return (
    <div>
      <div>(현재위치)</div>
      <div>{addr}</div>
      <div>{dustData[localIndex] ? dustData[localIndex].MSRDT : ''}</div>
      <div style={{ fontSize: '4rem', color: '#F8F8F8' }}>
        <Smile />
      </div>
      <div>{localDustPM10.state}</div>
      <div>{localDustPM10.message}</div>
    </div>
  );
};

export default MainDustState;
