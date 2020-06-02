import React from 'react';
import PropTypes from 'prop-types';
import styles from './form-label.module.scss';

const propTypes = {

  className: PropTypes.string,

  /**
   *
   *
   */
  variant: PropTypes.string,

  /** The HTML for attribute for associating the label with an input */
  htmlFor: PropTypes.string,
};

const defaultProps = {
  className: '',
  htmlFor: '',
  variant: ''
};

const FormLabel = React.forwardRef(
  (
    {
      className = '',
      htmlFor,
      variant,
      ...props
    }, ref
  ) => {
    className += ` ${styles['form-label']}`;

    if (variant) {
      className += ` ${styles[variant]}`;
    }

    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label ref={ref} className={className} htmlFor={htmlFor} {...props} />
    );
  },
);

FormLabel.displayName = 'FormLabel';
FormLabel.propTypes = propTypes;
FormLabel.defaultProps = defaultProps;

export default FormLabel;
