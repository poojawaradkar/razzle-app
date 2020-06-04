import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/row.module.scss';

const propTypes = {
  noGutters: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  role: PropTypes.string,
  tabIndex: PropTypes.string,
  clickHandler: PropTypes.func
};


export default function Row(props) {
  const {
    clickHandler = () => {},
    className = '',
    noGutters,
    children,
    role,
    tabIndex
  } = props;
  return (
    <div
      role={role}
      tabIndex={tabIndex}
      onClick={clickHandler}
      className={`${styles.row} ${className} ${noGutters ? `${styles['no-gutters']}` : ''}`}
    >
      {children || null}
    </div>
  );
}

Row.propTypes = propTypes;

Row.defaultProps = {
  noGutters: true,
  children: null,
  className: '',
  role: '',
  tabIndex: '',
  clickHandler: () => {},
};
