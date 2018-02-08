import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <div>
    <ul id="dropdown1" className="dropdown-content">
      <li ><Link to="/quotegenerator">Random Quote Generator</Link></li>
      <li><Link to="/wikipediasearch">Wikipedia Search</Link></li>
    </ul>
    <nav>
      <div className="nav-wrapper header">
        <div className="container">
          <a href="#" className="brand-logo">Simple React Projects by Leah Carr</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/about">About</Link></li>
            <li><a className="dropdown-button" href="#!" data-activates="dropdown1">
            Projects<i className="material-icons right">arrow_drop_down</i></a>
            </li>
            <li><Link to="/links">Links</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  );
}

export default Header;