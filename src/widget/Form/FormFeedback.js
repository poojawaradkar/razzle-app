import React from 'react';
import PropTypes from 'prop-types';
import styles from './form-feedback.module.scss';

const propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid'|'alert'|'helper')}
   */
  type: PropTypes.string.isRequired,

  className: PropTypes.string,
  as: PropTypes.elementType,
};

const defaultProps = {
  className: '',
  as: 'div'
};

const Feedback = React.forwardRef(
  (
    {
      as: Component = 'div',
      className,
      type,
      ...props
    }, ref
  ) => {
    className += ` ${styles.feedback} ${styles[type]}`;

    return (
      <Component
        {...props}
        ref={ref}
        className={className}
      />
    );
  }
);

Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
Feedback.defaultProps = defaultProps;

export default Feedback;
