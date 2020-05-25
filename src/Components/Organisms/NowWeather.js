/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
// import { AppContext } from '../../Context/AppContext';
import WeatherIcon from '../Atoms/WeatherIcon';
import NowLoaction from '../Atoms/NowLocation';
import WeatherText from '../Atoms/WeatherText';
import DegreeText from '../Atoms/DegreeText';
import MinMaxDgreeText from '../Atoms/MinMaxDgreeText';
import ToMisaeBtn from '../Atoms/ToMisaeBtn';
import { AppContext } from '../../Context/AppContext';

import './style/NowWeather.css';

const NowWeather = () => {
  const context = useContext(AppContext);
  const { weatherState } = context;

  return (
    <div className="nowWeatherContainer">
      <NowLoaction />
      <WeatherText />
      <WeatherIcon SKY={weatherState.SKY[0]} PTY={weatherState.PTY[0]} size="12rem" />
      <DegreeText T3H={weatherState.T3H[0]} size="2rem" />
      <MinMaxDgreeText />
      <ToMisaeBtn />
    </div>
  );
};

export default React.memo(NowWeather);
