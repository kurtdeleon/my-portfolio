import React from "react";
import TagList from "./tag-list";
import Button from "../components/button";

const ProjectPreview = props => {
  const { id, headerImg, title, tags, summary } = props;
  const callToAction = {
    text: "Tell me more",
    url: `/project/${id}`,
    type: "ghost",
    newTab: false,
  };

  return (
    <div>
      <img src={headerImg} alt={title} />
      <h3>{title}</h3>
      <TagList tags={tags} />
      <p>{summary}</p>
      <Button {...callToAction} />
    </div>
  );
};

export default ProjectPreview;
