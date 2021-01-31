import React from "react";
import { Link } from "gatsby";
import ProjectPreview from "../components/project-preview";
import SocialMediaLinks from "../components/social-media-links";
import Button from "../components/button";
import { introData } from "../data/data";

const Home = ({ pageContext: { selectedProjects } }) => {
  const { profilePicture, greeting, summary, cta } = introData;
  return (
    <div>
      <div id="introduction">
        <img src={profilePicture} alt="Kurt de Leon" />
        <div>
          <h2 dangerouslySetInnerHTML={{ __html: greeting }} />
          <p>{summary}</p>
        </div>
        <SocialMediaLinks />
        <Button {...cta} type="filled" newTab={true} />
      </div>
      <div className="project-list">
        <div>
          <h2>Projects</h2>
          <Link to="/project-list/">{`View All Projects >`}</Link>
        </div>
        <div>
          {selectedProjects.map(details => (
            <ProjectPreview {...details} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
