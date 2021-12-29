import React from "react";
import "../css/button.css";

const STYLES = ["btn--colorFilled", "btn--outlined"];
const SIZES = [
  "btn--bordered--static",
  "btn--bordered--flex",
  "btn--nonBordered--static",
  "btn--nonBordered--flex",
  
];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
