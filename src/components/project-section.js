import React from "react";
import Image from "./image";

const Section = props => {
  const { id, title, body } = props;
  const renderSectionBody = (section, idx) => {
    if (section.tag === "p") {
      return (
        <p
          key={`${title}-${idx}`}
          dangerouslySetInnerHTML={{ __html: section.content }}
        />
      );
    } else if (section.tag === "img") {
      return (
        <Image
          className="section-image"
          key={`${title}-${idx}`}
          alt={section.alt}
          filename={`${id}/${section.content}`}
        />
      );
    }
  };

  return (
    <section>
      <h4>{title}</h4>
      {body.map(renderSectionBody)}
    </section>
  );
};

export default Section;
