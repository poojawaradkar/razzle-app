import React from 'react';
import HeadingStyle from '../scss/heading.module.scss';

const HeadingComponent = props => {
  const {
    className,
    align,
    subtitle,
    children,
    variant
  } = props;
  const externalClass = className;
  const alignClass = HeadingStyle[align] || HeadingStyle.center;
  const subtitleClass = subtitle ? 'subtitle' : '';
  const headingClass = `${HeadingStyle.heading
  } ${
    HeadingStyle[variant || 'h1']
  } ${
    alignClass
  } ${
    subtitleClass}`;
  return (
    <div
      className={
        `${headingClass} ${externalClass || ''}`
      }
    >
      {children}
    </div>
  );
};

export default HeadingComponent;
