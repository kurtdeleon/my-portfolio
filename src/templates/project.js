import React from "react";
import InfoList from "../components/info-list";
import Section from "../components/project-section";
import Button from "../components/button";

const backToProjectListData = {
  type: "filled",
  text: "Explore more projects",
  url: "/project-list",
  newTab: false,
};

const Project = ({ pageContext: { project } }) => {
  const {
    id,
    headerImg,
    title,
    subtitle,
    summary,
    infoList,
    actions,
    chapters,
  } = project;

  return (
    <div>
      <img src={headerImg} alt="" />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{summary}</p>
      <div>
        {infoList.map(info => (
          <InfoList key={info.title} {...info} />
        ))}
      </div>
      <div>
        {actions.map(action => (
          <Button key={action.text} {...action} type="ghost" newTab="true" />
        ))}
      </div>
      <div>
        {chapters.map((chapter, idx) => (
          <Section key={id + "-" + idx} {...chapter} />
        ))}
      </div>
      <Button {...backToProjectListData} />
    </div>
  );
};

export default Project;
