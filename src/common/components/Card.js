import React from 'react';
import commonStyles from '../scss/common.module.scss';

const Card = props => {
  const {
    children,
    className = ''
  } = props;
  return (
    <div className={`${commonStyles.card} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
