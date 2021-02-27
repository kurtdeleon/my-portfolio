import React from "react";
import TagList from "./tag-list";
import Button from "../components/button";
import Image from "./image";

const ProjectPreview = props => {
  const { id, title, tags, summary } = props;
  const callToAction = {
    text: "Tell me more",
    url: `/project/${id}`,
    type: "ghost",
    size: "small",
    newTab: false,
  };

  return (
    <div className="project-preview">
      <Image filename={`${id}/header.jpg`} alt={title} />
      <h3>{title}</h3>
      <TagList tags={tags} />
      <p>{summary}</p>
      <Button {...callToAction} />
    </div>
  );
};

export default ProjectPreview;
