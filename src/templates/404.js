import React from "react";
import { Link } from "gatsby";

const Home = () => {
  return (
    <div>
      <span>404 PAGE RIGHT HERE</span>
      <Link to="/">Go back home</Link>
      <Link to="/project-list/">Explore my work</Link>
    </div>
  );
};

export default Home;
