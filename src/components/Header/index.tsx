import React from "react";
import Nav from "../Nav/index.tsx";

const Header: React.FC = () => {
  return (
    <header>
      <a href='#hero'>Tonje Jenssen</a>
      <Nav />
    </header>
  );
};

export default Header;
