import React from "react";

const Section = props => {
  const { title, body } = props;
  const renderSectionBody = (section, idx) => {
    if (section.tag === "p") {
      return <p key={`${title}-${idx}`}>{section.content}</p>;
    } else if (section.tag === "img") {
      return (
        <img key={`${title}-${idx}`} src={section.content} alt={section.alt} />
      );
    }
  };

  return (
    <div>
      <h4>{title}</h4>
      {body.map(renderSectionBody)}
    </div>
  );
};

export default Section;
