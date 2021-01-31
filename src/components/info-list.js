import React from "react";

const InfoList = props => {
  const { title, items } = props;
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {items.map(item => (
          <li key={title + item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InfoList;
