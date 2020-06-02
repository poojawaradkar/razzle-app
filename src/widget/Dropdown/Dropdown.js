import React, { useRef, useState } from 'react';
import useOnClickOutside from '../hooks/useOnClickOutside';
import styles from './drop-down.module.scss';

const Dropdown = props => {
  const {
    value,
    tabIndex,
    placeHolder,
    optionsList,
    itemClass,
    renderItem,
    isMobile,
    onChange,
    placeholderClass
  } = props;

  const [isOpen, toggleDropdown] = useState(false);
  const dropdownRef = useRef();
  useOnClickOutside(dropdownRef, () => {
    toggleDropdown(false);
  });
  const onSelect = (val, index) => {
    const selectedval = isMobile ? optionsList[val] : val;

    if (onChange) {
      onChange(selectedval, index);
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      ref={dropdownRef}
      role="button"
      tabIndex={0}
      className={`${styles['dropdown-holder']} ${isOpen ? styles.active : ''}`}
      onClick={() => toggleDropdown(!isOpen)}
    >
      <div className={styles['dropdown-value']}>
        {value
          ? <div>{value}</div>
          : (
            <div
              className={`${placeholderClass} ${styles.placeholder}`}
            >
              {placeHolder}
            </div>
          )}
      </div>
      <ul className={`${isOpen ? styles.open : styles.close}`}>
        {
          optionsList.map((cur, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <li
              key={cur.key}
              role="presentation"
              tabIndex={tabIndex + index}
              onClick={() => onSelect(cur, index)}
              className={`${styles['list-item']}${value === cur.key ? ` ${styles.active}` : ''}
              ${itemClass ? ` ${itemClass}` : ''}`}
            >
              {renderItem(cur)}
            </li>
          ))
        }
      </ul>
    </div>
  );
};
Dropdown.defaultProps = {
  renderItem: obj => (
    <div className={styles['item-text']}>
      {obj.label}
    </div>
  ),
  itemClass: ''
};
export default Dropdown;
