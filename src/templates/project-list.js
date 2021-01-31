import React from "react";
import ProjectPreview from "../components/project-preview";

const ProjectList = ({ pageContext: { projects } }) => {
  return (
    <div className="project-list" style={{ color: `teal` }}>
      <h1>Projects</h1>
      <div>
        {projects.map(details => (
          <ProjectPreview {...details} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
