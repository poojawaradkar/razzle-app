import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const languages = [
    {
      name: 'All',
      param: 'all',
    },
    {
      name: 'JavaScript',
      param: 'javascript',
    },
    {
      name: 'Ruby',
      param: 'ruby',
    },
    {
      name: 'Python',
      param: 'python',
    },
    {
      name: 'Java',
      param: 'java',
    },
  ];

  return (
    <div className="articles-holder">
      <h1>Popular Articles :)</h1>
      <div className="navbar-holder">
        {languages.map(({ name, param }) => (
          <NavLink
            className={`navbar-links ${`link-${param}`}`}
            key={param}
            activeClassName="selected-link"
            to={`/popular/${param}`}
          >
            {name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
