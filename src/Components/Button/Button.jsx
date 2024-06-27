import React from "react";
import StyledButton from "./Button.styled.js";

const Button = (props) => {
  return <StyledButton>{props.texto}</StyledButton>;
};

export default Button;
