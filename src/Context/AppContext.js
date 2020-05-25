import React, { createContext } from 'react';
import useWeatherState from '../Hook/useWeatherState';
import useLocationState from '../Hook/useLocationState';
import useDust from '../Hook/useDust';

const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [locationState, fetchLocation] = useLocationState();
  const [weatherState, fetchWeather] = useWeatherState();
  const [dustState, fetchDustData, dustLevel] = useDust();

  const data = {
    weatherState,
    fetchWeather,
    locationState,
    fetchLocation,
    dustState,
    fetchDustData,
    dustLevel,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
