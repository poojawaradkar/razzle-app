import React from 'react';
import PropTypes from 'prop-types';
import { toModuleClass } from '../utills';
import styles from './styles/col.module.scss';

const colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
const stringOrNumber = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]);

const columnProps = PropTypes.oneOfType([
  PropTypes.bool, // can be a boolean
  PropTypes.number, // can be a number
  PropTypes.string, // can be a string,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]), // An object that could be one of many types
    order: stringOrNumber,
    offset: stringOrNumber
  })
]);

const propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  children: PropTypes.node,
  className: PropTypes.string,
  widths: PropTypes.array,
  clickHandler: PropTypes.func
};

export default function Col(props) {
  const {
    clickHandler = () => {},
    className,
    widths,
    children,
    ...attributes
  } = props;

  const sizeClass = [];
  const classes = [];
  widths.forEach(colWidth => {
    let size; let offset; let order;
    const columnProp = props[colWidth];

    delete attributes[colWidth];
    if (columnProp != null && typeof columnProp === 'object') {
      ({ size = true, offset, order } = columnProp);
    } else {
      size = columnProp;
    }
    const infix = colWidth !== 'xs' ? `-${colWidth}` : '';

    if (size != null) {
      sizeClass.push(
        (size === true) ? `${'col'}` : `col${infix}-${size}`
      );
    }

    if (order != null) {
      classes.push(`order${infix}-${order}`);
    }

    if (offset != null) {
      classes.push(`offset${infix}-${offset}`);
    }
  });

  if (!sizeClass.length) {
    sizeClass.push('col');
  }
  sizeClass.push(className);
  const classList = toModuleClass(sizeClass.concat(classes).join(' '), styles);
  return (
    <div
      onClick={clickHandler}
      className={`${classList}`}
      {...attributes}
    >
      {children || null}
    </div>
  );
}
Col.propTypes = propTypes;
Col.defaultProps = {
  widths: colWidths,
  xs: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
  children: null,
  className: '',
  clickHandler: () => {},
};
