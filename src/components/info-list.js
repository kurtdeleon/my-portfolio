import React from "react";

const InfoList = props => {
  const { title, items } = props;
  return (
    <div className="info-list">
      <span>{title}</span>
      <ul>
        {items.map(item => (
          <li key={title + item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InfoList;
