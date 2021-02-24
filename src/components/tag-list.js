import React from "react";

const Tag = props => {
  return <span className="tag">{props.text}</span>;
};

const TagList = props => {
  return (
    <div className="tag-list">
      {props.tags.map((t, idx) => (
        <Tag key={`${t}-${idx}`} text={t} />
      ))}
    </div>
  );
};

export default TagList;
