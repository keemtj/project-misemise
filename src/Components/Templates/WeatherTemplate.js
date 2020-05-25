/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import NowWeather from '../Organisms/NowWeather';

const WeatherTemplate = () => {
  return (
    <div>
      <NowWeather />
    </div>
  );
};

export default React.memo(WeatherTemplate);
