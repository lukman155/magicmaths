import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <h1>Math Magicians</h1>
    <nav>
      <ul>
        <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
        <span className="vertical-line" />
        <li><Link to="/calpage" style={{ textDecoration: 'none' }}>Calculator</Link></li>
        <span className="vertical-line" />
        <li><Link to="/quotepage" style={{ textDecoration: 'none' }}> Quote</Link></li>
      </ul>
    </nav>
  </div>
);

export default Header;
