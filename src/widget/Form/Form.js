import PropTypes from 'prop-types';
import React from 'react';
import FormControl from './FormControl';
import FormLabel from './FormLabel';
import FeedBack from './FormFeedback';
import FormRadio from './FormRadio';

const propTypes = {
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  // validated: PropTypes.bool,
  as: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  as: 'form',
  className: ''
};

const Form = React.forwardRef(
  (
    {
      className,
      as: Component = 'form',
      ...props
    },
    ref
  ) => (
    <Component
      {...props}
      ref={ref}
      className={className}
    />
  ),
);

Form.displayName = 'Form';
Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

Form.Control = FormControl;
Form.Label = FormLabel;
Form.FeedBack = FeedBack;
Form.Radio = FormRadio;

export default Form;
