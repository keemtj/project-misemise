import React from 'react';
import { Link } from 'react-router-dom';
import './style/ToMisaeBtn.css';

const ToMisaeBtn = () => {
  return (
    <Link to="/misaemisae">
      <button className="toMisae" type="button">
        미세미세
      </button>
    </Link>
  );
};

export default ToMisaeBtn;
