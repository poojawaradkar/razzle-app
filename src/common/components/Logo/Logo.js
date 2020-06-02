import React from 'react';
import { Link } from 'react-router-dom';
import logoStyles from './logo.module.scss';

const Logo = props => {
  const {
    imgSrc
  } = props;
  return (
    <Link to="/">
      <img
        alt="LIDO Learning Logo"
        title="LIDO Learning Logo"
        className={logoStyles.logo}
        src={imgSrc}
      />
    </Link>
  );
};

export default Logo;
