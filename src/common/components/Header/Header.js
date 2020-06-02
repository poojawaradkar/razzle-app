import React from 'react';
import Logo from '../Logo/Logo';
import headerStyles from './header.module.scss';

const Header = props => {
  const {
    children,
    subHeader = '',
    className = ''
  } = props;
  return (
    <div className={`${headerStyles.header} ${className}`}>
      <Logo
        imgSrc="https://www.lidolearning.com/images/logo.svg"
      />
      {subHeader
        ? <div className={headerStyles.subHeader}>{subHeader}</div>
        : null}
      {children || null}
    </div>
  );
};

export default Header;
