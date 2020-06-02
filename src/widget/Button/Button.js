import React from 'react';
import PropTypes from 'prop-types';
import { toModuleClass } from '../utills';
import styles from './button.module.scss';

const propTypes = {
  /**
   * One or more button variant combinations
   *
   * buttons may be one of a variety of visual variants such as:
   *
   * `'default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'`
   *
   * as well as "outline" versions (prefixed by 'outline-*')
   *
   * `'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger',
   *  'outline-warning', 'outline-info', 'outline-dark', 'outline-light'`
   */
  variant: PropTypes.string,

  /** Custom class names for button  */
  className: PropTypes.string,

  /**
   * Specifies a large or small button.
   *
   * @type ('sm'|'md'|'lg')
   */
  size: PropTypes.string,

  /** Spans the full width of the Button parent */
  block: PropTypes.bool,

  /**
   * Disables the Button, preventing mouse events,
   * even if the underlying component is an `<a>` element
   */
  disabled: PropTypes.bool,

  /**
   * Defines HTML button type attribute.
   *
   * @default 'button'
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit', null]),

};

const defaultProps = {
  variant: 'default',
  size: 'md',
  className: '',
  block: false,
  disabled: false,
  type: 'button'
};

const Button = React.forwardRef(
  (
    {
      variant, size, className, block,
      ...restProps
    },
    ref
  ) => {
    const classes = `btn-style ${className} btn-${variant} ${block && 'btn-block'} ${size && `btn-${size}`}`;
    if (ref) {
      restProps.ref = ref;
    }
    // eslint-disable-next-line react/button-has-type
    return <button className={toModuleClass(classes, styles)} {...restProps} />;
  }
);

Button.displayName = 'Button';
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
