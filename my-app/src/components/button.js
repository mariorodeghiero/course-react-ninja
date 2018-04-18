import React from "react";

const Button = ({ children, handleClick }) => (
  <button className="my-button" onClick={handleClick}>
    {children}
  </button>
);

export default Button;
