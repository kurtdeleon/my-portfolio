import React from "react";
import { Link } from "gatsby";
import Image from "../components/image";

const FourOhFour = () => {
  return (
    <div id="fourohfour-wrapper">
      <div>
        <div id="image-container">
          <Image className="" alt="404" filename={"404.png"} />
        </div>
        <div id="text-container">
          <h2>{`This page doesn't exist.`}</h2>
          <p>
            {`My bad, I must've messed something up. `}
            <Link to="/">{`Go back home instead!`}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourOhFour;
