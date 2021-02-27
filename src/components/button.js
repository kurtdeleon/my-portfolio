import React from "react";

const Button = props => {
  return (
    <a
      className={`button button--${props.type} button--${props.size}`}
      role="button"
      target={props.newTab ? "_blank" : "_self"}
      rel="noreferrer"
      href={props.url}
    >
      {props.text}
    </a>
  );
};

export default Button;
