/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../Context/AppContext';
import WeatherIcon from '../Atoms/WeatherIcon';
import NowLoaction from '../Atoms/NowLocation';
import WeatherText from '../Atoms/WeatherText';
import DgreeText from '../Atoms/DgreeText';
import MinMaxDgreeText from '../Atoms/MinMaxDgreeText';

const WeatherTemplate = () => {
  const context = useContext(AppContext);
  const { weatherState, fetchWeather, locationState } = context;

  console.log(locationState);
  console.log(weatherState);

  useEffect(() => {
    if (locationState.nx !== 1) fetchWeather(locationState.nx, locationState.ny);
  }, [locationState]);

  return (
    <div>
      <NowLoaction />
      <WeatherText />
      <WeatherIcon />
      <DgreeText />
      <MinMaxDgreeText />
    </div>
  );
};

export default React.memo(WeatherTemplate);
