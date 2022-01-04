import React from "react";
import "../css/button.css";
const STYLES = ["btn--colorFilled", "btn--outlined","btn--withArrow"];
const SIZES = [
  "btn--bordered--static",
  "btn--bordered--flex",
  "btn--nonBordered--static",
  "btn--nonBordered--flex",
  "btn--withChevronArrow",
  
];
export const ButtonComponent = ({
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
