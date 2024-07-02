import React from "react";
import StyledContainer from "./Badges.styled";
import certificadosBadge from "../../assets/badges/Badge (2).svg"
import googleBadge from "../../assets/badges/certificados.svg"
import creaspBadge from "../../assets/badges/creasp.svg"


const Badges = (props) => {
  return (
    <>
    <StyledContainer>
        <img src={googleBadge} alt="" />
        <img src={creaspBadge} alt="" />
        <img src={certificadosBadge} alt="" />
    </StyledContainer>
    </>
);
};

export default Badges;
