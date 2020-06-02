/* eslint-disable import/prefer-default-export */
export const toModuleClass = (classList, styles) => classList.split(' ').map(cur => styles[cur] || cur).join(' ');
