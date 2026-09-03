import React from "react";
import Header from "../Header/index.tsx";
import Main from "../Main/index.tsx";
import Footer from "../Footer/index.tsx";

const Layout: React.FC = () => {
  return (
    <body>
      <Header />
      <Main />
      <Footer/>
    </body>
  );
};

export default Layout;
