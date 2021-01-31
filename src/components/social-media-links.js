import React from "react";
import { socialMediaData } from "../data/data";
import Github from "../../static/github.png";
import LinkedIn from "../../static/linkedin.png";
import Email from "../../static/email.png";
import Facebook from "../../static/facebook.png";

const icons = Object.freeze({ Github, LinkedIn, Email, Facebook });

const SocialMediaLinks = () => {
  return (
    <nav>
      {socialMediaData.map(link => (
        <a key={link.title} href={link.url} target="_blank" rel="noreferrer">
          <img src={icons[link.title]} alt={link.title} />
        </a>
      ))}
    </nav>
  );
};

export default SocialMediaLinks;
