import React from "react";
import ProjectPreview from "../components/project-preview";

const ProjectList = ({ pageContext: { projects } }) => {
  return (
    <div id="project-list-wrapper">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map(details => (
          <ProjectPreview {...details} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
