import React from "react";
import { LabelTitle } from "../../assets/styles/typography.styled.js";
import { H2 } from "../../assets/styles/typography.styled.js";


const Titles = (props) => {
   
  return (
    <>
      <LabelTitle  className="project_title">{props.text_label}</LabelTitle>
      <H2 className="project_title">{props.text_title} <span>{props.text_span}</span></H2>
    </>
  );
};

export default Titles;