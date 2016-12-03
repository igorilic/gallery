import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <div className="header">
      <IndexLink to="/">Home</IndexLink>
      <Link to="/gallery">Gallery</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Header;











