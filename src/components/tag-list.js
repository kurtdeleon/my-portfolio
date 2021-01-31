import React from "react";

const Tag = props => {
  return <span>{props.text}</span>;
};

const TagList = props => {
  return props.tags.map(t => <Tag text={t} />);
};

export default TagList;
