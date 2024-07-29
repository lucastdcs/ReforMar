import React from "react";
import { StarsContainer } from "./Stars.styled";

const Stars = ({ rating }) => {
  const totalStars = 5;

  const getStarColor = (index) => {
    return index < rating ? "#0000FF" : "#B5B5B5"; // Azul para estrelas preenchidas, cinza para estrelas vazias
  };

  const stars = Array.from({ length: totalStars }, (_, index) => (
    <svg
      key={index}
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 0.5L12.9697 8.10081H20.9616L14.496 12.7984L16.9656 20.3992L10.5 15.7016L4.03436 20.3992L6.50402 12.7984L0.0383787 8.10081H8.03035L10.5 0.5Z"
        fill={getStarColor(index)}
      />
    </svg>
  ));

  return <StarsContainer>{stars}</StarsContainer>;
};

export default Stars;