import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <img className="logo" src='src/assets/logo.png'/>
      <h2 className="menu-hamburger" onClick={toggleMenu}>
        ☰
      </h2>
    </header>
  );
};

export default Header;