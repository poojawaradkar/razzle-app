import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/container.module.scss';


const propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  clickHandler: PropTypes.func
};


export default function Container(props) {
  const {
    clickHandler = () => {},
    className = '',
    fluid,
  } = props;
  return (
    <div
      onClick={clickHandler}
      className={`${className} ${fluid ? `${styles['container-fluid']}` : `${styles.container}`}`}
    >
      {props.children ? props.children : null}
    </div>
  );
}

Container.propTypes = propTypes;
Container.defaultProps = {
  fluid: true,
  children: null,
  className: '',
  clickHandler: () => {},
};
