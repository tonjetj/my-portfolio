import React from "react";

const Nav: React.FC = () => {
  return (
    <nav>
      <a href='/#hero' className='logo'>
        Tonje Jenssen
      </a>
      <ul>
        <li>
          <a href='/#work'>Prosjekter</a>
        </li>
        <li>
          <a href='/#about'>Om meg</a>
        </li>
        <li>
          <a href='/#contact'>Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
