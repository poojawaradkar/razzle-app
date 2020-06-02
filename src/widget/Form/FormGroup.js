import PropTypes from 'prop-types';
import React from 'react';
import styles from './form-group.module.scss';

const propTypes = {
  as: PropTypes.elementType,

  /**
   * The FormGroup `ref` will be forwarded to the underlying element.
   * Unless the FormGroup is rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  // eslint-disable-next-line react/require-default-props
  _ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ]),
  className: PropTypes.string,
  /**
   * The content of the component.
   */
  children: PropTypes.node,
};

const defaultProps = {
  className: '',
  as: 'div',
  children: null
};

const FormGroup = React.forwardRef(
  (
    {
      className,
      children,
      as: Component = 'div',
      ...props
    },
    ref,
  ) => {
    className += ` ${styles['form-group']}`;

    return (
      <Component
        {...props}
        ref={ref}
        className={className}
      >
        {children}
      </Component>
    );
  },
);


FormGroup.displayName = 'FormGroup';
FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
