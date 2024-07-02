import React from "react";
import StyledContainer from "./Badges.styled";
import certificadosBadge from "../../assets/badges/Badge (2).svg";
import googleBadge from "../../assets/badges/certificados.svg";
import creaspBadge from "../../assets/badges/creasp.svg";

const Badges = (props) => {
  return (
    <>
      <StyledContainer>
        <figure>
          {" "}
          <img src={googleBadge} alt="" draggable="false"/>
        </figure>
        <figure>
          <img src={creaspBadge} alt="" draggable="false"/>
        </figure>
        <figure>
          <img src={certificadosBadge} alt="" draggable="false"/>
        </figure>
      </StyledContainer>
    </>
  );
};

export default Badges;
