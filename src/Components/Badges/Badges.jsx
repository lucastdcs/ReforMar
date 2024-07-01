import React from "react";
import StyledContainer from "./Badges.styled";
import googleBadge from "../../assets/badges/Badge (2).svg"
import certificadosBadge from "../../assets/badges/certificados.svg"
import creaspBadge from "../../assets/badges/creasp.svg"


const Badges = (props) => {
  return (
    <>
    <StyledContainer>
        <img src={googleBadge} alt="" />
        <img src={googleBadge} alt="" />
        <img src={googleBadge} alt="" />
    </StyledContainer>
    </>
);
};

export default Badges;
