import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudRain, faSnowflake, faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

import { AppContext } from '../../Context/AppContext';

const WeatherIcon = () => {
  const context = useContext(AppContext);
  const { weatherState } = context;

  const skyState = weatherState.SKY[0] ? +weatherState.SKY[0].value : 0;
  const ptyState = weatherState.PTY[0] ? +weatherState.PTY[0].value : 0;

  let icon = faQuestionCircle;

  if (ptyState) {
    if (ptyState === 1) icon = faCloudRain;
    else if (ptyState === 2 || skyState === 3) icon = faSnowflake;
    else icon = faCloudShowersHeavy;
  } else if (skyState === 0) icon = faQuestionCircle;
  else if (skyState === 1) icon = faSun;
  else icon = faCloud;

  return <FontAwesomeIcon icon={icon} style={{ color: '#F8F8FF' }} size="10x" />;
};

export default WeatherIcon;
