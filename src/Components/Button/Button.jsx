import React from "react";
import StyledButton from "./Button.styled.js";

const Button = (props) => {
  return <StyledButton id="btn_contact" className={props.className} variant={props.variant} type={props.type} onClick={props.onClick}>{props.texto}</StyledButton>;
};

export default Button;
