import React from "react";
import { Link } from "gatsby";
import Logo from "../../static/site-logo.png";

const Header = () => {
  return (
    <header id="header">
      <div>
        <img src={Logo} alt="Logo"></img>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/project-list/">Projects</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
