import React from "react";
import { Link } from "gatsby";
import ProjectPreview from "../components/project-preview";
import Button from "../components/button";
import { introData } from "../data/data";
import Image from "../components/image";

const Home = ({ pageContext: { selectedProjects } }) => {
  const { pictureMobile, pictureDesktop, greeting, summary, cta } = introData;
  return (
    <div>
      <section id="introduction">
        <div id="introduction--picture">
          <Image
            className="picture-desktop"
            alt="Kurt de Leon"
            filename={pictureDesktop}
          />
          <Image
            className="picture-mobile"
            alt="Kurt de Leon"
            filename={pictureMobile}
          />
        </div>
        <div id="introduction--content">
          <h2 dangerouslySetInnerHTML={{ __html: greeting }} />
          <div id="summary">
            {summary.map((content, idx) => (
              <p
                key={`summary-${idx}`}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ))}
          </div>
          <Button {...cta} type="filled" size="regular" newTab={true} />
        </div>
      </section>
      <section id="selected-projects">
        <div id="selected-projects--header">
          <h2>Projects</h2>
          <Link to="/project-list/">{`View All Projects >`}</Link>
        </div>
        <div className="project-list">
          {selectedProjects.map(details => (
            <ProjectPreview key={`proj-${details.id}`} {...details} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
