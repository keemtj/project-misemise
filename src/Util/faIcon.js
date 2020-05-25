import React from 'react';
import { faLaughSquint, faGrinStars, faSmileWink, faSmile, faFrown, faTired, faDizzy, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faSkull, faSun, faCloud, faCloudRain, faSnowflake, faCloudShowersHeavy, faICursor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GrinStars = () => <FontAwesomeIcon icon={faGrinStars} />;
const LaughSquint = () => <FontAwesomeIcon icon={faLaughSquint} />;
const SmileWink = () => <FontAwesomeIcon icon={faSmileWink} />;
const Smile = () => <FontAwesomeIcon icon={faSmile} />;
const Frown = () => <FontAwesomeIcon icon={faFrown} />;
const Tired = () => <FontAwesomeIcon icon={faTired} />;
const Dizzy = () => <FontAwesomeIcon icon={faDizzy} />;
const Skull = () => <FontAwesomeIcon icon={faSkull} />;

const QuestionCircle = () => <FontAwesomeIcon icon={faQuestionCircle} />;
const Sun = () => <FontAwesomeIcon icon={faSun} />;
const Cloud = () => <FontAwesomeIcon icon={faCloud} />;
const CloudRain = () => <FontAwesomeIcon icon={faCloudRain} />;
const Snowflake = () => <FontAwesomeIcon icon={faSnowflake} />;
const CloudShowersHeavy = () => <FontAwesomeIcon icon={faCloudShowersHeavy} />;
const ICursor = () => <FontAwesomeIcon icon={faICursor} />;

export { GrinStars, LaughSquint, SmileWink, Smile, Frown, Tired, Dizzy, Skull, QuestionCircle, Sun, Cloud, CloudRain, Snowflake, CloudShowersHeavy, ICursor };
