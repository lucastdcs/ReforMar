import React from "react";
import StyledButton from "./Button.styled.js";
import {useNavigate} from 'react-router-dom'

const Button = (props) => {

  const navigate = useNavigate();

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    } else if (props.destino) {
      navigate(`/${props.destino}`);
    }
  }

  // const redirect = () => {
  //   navigate(`${'/' + props.destino}`);
  // };

  return (
    <StyledButton
      whileHover={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      whileTap={{ scale: 1 }}
      id="btn_contact"
      className={props.className}
      variantType={props.variantType}
      type={props.type}
      onClick={handleClick}
    >
      {props.texto}
    </StyledButton>
  );
};

export default Button;
