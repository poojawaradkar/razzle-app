import React from 'react';
import { Link } from 'react-router-dom';
import commonStyles from '../scss/common.module.scss';

const TermsAndConditions = props => {
  const {
    variant = ''
  } = props;
  return (
    <div className={`${commonStyles['terms-conditions']} ${commonStyles[variant]}`}>
      <span>
        By signing up, I agree to the&nbsp;
        <Link to="/" className={commonStyles.anchor}>Terms and Conditions</Link>
      </span>
    </div>

  );
};

export default TermsAndConditions;
