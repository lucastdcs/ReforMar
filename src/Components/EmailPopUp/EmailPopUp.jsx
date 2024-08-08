import React from "react";
import ReactDOM from "react-dom";
import { Container, PopUp } from "./EmailPopUp.styled";
import { H7 } from "../../assets/styles/typography.styled";
import Button from "../Button/Button";
import { AnimatePresence } from "framer-motion";

const EmailPopUp = (props) => {
  console.log("popup");
  return ReactDOM.createPortal(
    <AnimatePresence>
      <Container>
        <PopUp
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              ease: "easeOut",
              duration: 0.2,
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.75,
            transition: {
              ease: "easeIn",
              duration: 0.15,
            },
          }}
        >
          <H7>Sua mensagem foi enviada e logo entraremos em contato!</H7>
          <Button texto="Ok" onClick={props.onClick} />
        </PopUp>
      </Container>
    </AnimatePresence>,
    document.getElementById("portal")
  );
};

export default EmailPopUp;
