import React from "react";
import SocialMediaLinks from "./social-media-links";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer>
      <div>
        <SocialMediaLinks /> <span onClick={scrollToTop}>Back to Top</span>
      </div>
    </footer>
  );
};

export default Footer;
