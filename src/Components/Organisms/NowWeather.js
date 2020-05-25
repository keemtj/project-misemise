/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
// import { AppContext } from '../../Context/AppContext';
import WeatherIcon from '../Atoms/WeatherIcon';
import NowLoaction from '../Atoms/NowLocation';
import WeatherText from '../Atoms/WeatherText';
import DgreeText from '../Atoms/DgreeText';
import MinMaxDgreeText from '../Atoms/MinMaxDgreeText';

import './style/NowWeather.css';

const NowWeather = () => {
  return (
    <div className="nowWeatherContainer">
      <NowLoaction />
      <WeatherText />
      <WeatherIcon />
      <DgreeText />
      <MinMaxDgreeText />
    </div>
  );
};

export default React.memo(NowWeather);
