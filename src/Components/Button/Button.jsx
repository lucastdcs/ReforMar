import React from "react";
import StyledButton from "./Button.styled.js";

const Button = (props) => {


  return (
    <StyledButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.15 }}
      id="btn_contact"
      className={props.className}
      variantType={props.variantType}
      type={props.type}
      onClick={props.onClick}
    >
      {props.texto}
    </StyledButton>
  );
};

export default Button;
