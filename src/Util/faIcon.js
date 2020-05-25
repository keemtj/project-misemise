/* eslint-disable max-len */
import React from 'react';
import { faLaughSquint, faGrinStars, faSmileWink, faSmile, faFrown, faTired, faDizzy, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faSkull, faSun, faCloud, faCloudRain, faSnowflake, faCloudShowersHeavy, faICursor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GrinStars = () => <FontAwesomeIcon icon={faGrinStars} size="3x" />;
const LaughSquint = () => <FontAwesomeIcon icon={faLaughSquint} size="3x" />;
const SmileWink = () => <FontAwesomeIcon icon={faSmileWink} size="3x" />;
const Smile = () => <FontAwesomeIcon icon={faSmile} size="3x" />;
const Frown = () => <FontAwesomeIcon icon={faFrown} size="3x" />;
const Tired = () => <FontAwesomeIcon icon={faTired} size="3x" />;
const Dizzy = () => <FontAwesomeIcon icon={faDizzy} size="3x" />;
const Skull = () => <FontAwesomeIcon icon={faSkull} size="3x" />;

const QuestionCircle = () => <FontAwesomeIcon icon={faQuestionCircle} />;
const Sun = () => <FontAwesomeIcon icon={faSun} />;
const Cloud = () => <FontAwesomeIcon icon={faCloud} />;
const CloudRain = () => <FontAwesomeIcon icon={faCloudRain} />;
const Snowflake = () => <FontAwesomeIcon icon={faSnowflake} />;
const CloudShowersHeavy = () => <FontAwesomeIcon icon={faCloudShowersHeavy} />;
const ICursor = () => <FontAwesomeIcon icon={faICursor} />;

export { GrinStars, LaughSquint, SmileWink, Smile, Frown, Tired, Dizzy, Skull, QuestionCircle, Sun, Cloud, CloudRain, Snowflake, CloudShowersHeavy, ICursor };
