import React from "react";
import StyledButton from "./Button.styled.js";

const Button = (props) => {
  return <StyledButton id="btn_contact" variant={props.variant}>{props.texto}</StyledButton>;
};

export default Button;
