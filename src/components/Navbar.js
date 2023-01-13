import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 1,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
        <nav className="navbar">
            <h1 className="navbar-title">Book Store EJ</h1>
            <ul className="navmenu">
                {links.map((link) => (
                    <li key={link.id} className='nav-item'>
                        <NavLink to={link.path} className='nav-link'>{link.text}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
  );
};

export default Navbar;