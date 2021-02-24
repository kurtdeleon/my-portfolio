import React from "react";
import InfoList from "../components/info-list";
import Section from "../components/project-section";
import Button from "../components/button";
import Image from "../components/image";

const backToProjectListData = {
  type: "filled",
  text: "Explore more projects",
  url: "/project-list",
  newTab: false,
};

const Project = ({ pageContext: { project } }) => {
  const { id, title, subtitle, summary, infoList, actions, chapters } = project;

  return (
    <article className="view-project">
      <section className="project-summary">
        <Image alt="" filename={`${id}/header.jpg`} />
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p dangerouslySetInnerHTML={{ __html: summary }} />
        {infoList.length > 0 && (
          <div className="info-list-wrapper">
            {infoList.map(info => (
              <InfoList key={info.title} {...info} />
            ))}
          </div>
        )}
        {actions.length > 0 && (
          <div className="action-buttons">
            {actions.map(action => (
              <Button
                key={action.text}
                {...action}
                type="ghost"
                newTab="true"
              />
            ))}
          </div>
        )}
      </section>
      <div className="chapters">
        {chapters.map((chapter, idx) => (
          <Section key={id + "-" + idx} id={id} {...chapter} />
        ))}
      </div>
      <Button {...backToProjectListData} />
    </article>
  );
};

export default Project;
