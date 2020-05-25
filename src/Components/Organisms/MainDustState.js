/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import { Smile } from '../../Util/faIcon';
import './style/MainDustState.css';

const MainDustState = () => {
  const context = useContext(AppContext);
  const { dustState, dustLevel, locationState } = context;
  const { addr } = locationState;
  const { dustData } = dustState;
  const localIndex = dustData.findIndex((d) => d.MSRSTE_NM === '성동구');
  const localDustPM10 = dustData[localIndex] ? dustLevel(dustData[localIndex].PM10) : '';
  // 상당히 나쁨 매우 나쁨 최악
  return (
    <div
      className={
        (localDustPM10.state === '최고 좋음'
          ? 'main-dust-state-grinstars'
          : localDustPM10 === '좋음'
          ? 'main-dust-state-laughsquint'
          : localDustPM10 === '양호'
          ? 'main-dust-state-smilewink'
          : localDustPM10 === '보통'
          ? 'main-dust-state-smile'
          : localDustPM10 === '나쁨'
          ? 'main-dust-state-frown'
          : localDustPM10 === '상당히 나쁨'
          ? 'main-dust-state-tired'
          : localDustPM10 === '매우 나쁨'
          ? 'main-dust-state-dizzy'
          : localDustPM10 === '최악'
          ? 'main-dust-state-skull'
          : 'main-dust-state-smile',
        'main-dust-state')
      }
    >
      <div>(현재위치)</div>
      <div>{addr}</div>
      <div>{dustData[localIndex] ? dustData[localIndex].MSRDT : ''}</div>
      <div style={{ fontSize: '4rem', color: '#F8F8F8' }}>
        <Smile />
      </div>
      <div>{localDustPM10.state}</div>
      <div>{localDustPM10.message}</div>
      <Link to="/">
        <button type="button">날씨날씨</button>
      </Link>
    </div>
  );
};

export default MainDustState;
