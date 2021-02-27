import React from "react";
import ProjectPreview from "../components/project-preview";

const ProjectList = ({ pageContext: { projects } }) => {
  return (
    <div id="project-list-wrapper">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((details, idx) => (
          <ProjectPreview key={`pp-${idx}`} {...details} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
