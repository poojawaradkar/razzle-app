import React from 'react';
import PropTypes from 'prop-types';
import FormLabel from './FormLabel';
import FormInput from './FormControl';
import styles from './form-radio.module.scss';


const propTypes = {
  /**
     * The FormRadio `ref` will be forwarded to the underlying input element,
     * which means it will be a DOM node, when resolved.
     *
     * @type {ReactRef}
     * @alias ref
     */
  // eslint-disable-next-line react/require-default-props
  _ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ]),

  labelClass: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.node,

  /** Manually style the input as valid */
  isValid: PropTypes.bool,

  /** Manually style the input as invalid */
  isInvalid: PropTypes.bool,

};

const defaultProps = {
  disabled: false,
  labelClass: '',
  label: null,
  isValid: false,
  isInvalid: false
};

const FormRadio = React.forwardRef(
  (
    {
      id = `radio${Math.floor(new Date().getTime() * Math.random())}`,
      disabled,
      isValid,
      isInvalid,
      className = '',
      labelClass = '',
      style,
      label,
      ...otherProps
    },
    ref,
  ) => {
    const input = (
      <FormInput
        {...otherProps}
        id={id}
        type="radio"
        ref={ref}
        className={styles['custom-radio']}
        isValid={isValid}
        isInvalid={isInvalid}
        disabled={disabled}
      />
    );
    return (
      <label
        htmlFor={id}
        style={style}
        className={`${className} ${styles['custom-radio-input']} ${disabled
          ? styles['input-disabled'] : ''} ${label
          ? styles['has-label'] : ''}`}
      >
        <>
          {input}
          <FormLabel
            className={`${styles['label-tag']} ${labelClass}`}
            htmlFor={id}
          >
            <span className={styles['label-span']} />
            {label}
          </FormLabel>
        </>
      </label>
    );
  },
);
FormRadio.displayName = 'FormRadio';
FormRadio.propTypes = propTypes;
FormRadio.defaultProps = defaultProps;

export default FormRadio;
