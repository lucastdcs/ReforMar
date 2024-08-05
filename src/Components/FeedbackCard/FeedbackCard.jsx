import React from "react";
import StyledContainer from "./FeedbackCard.styled";
import { H7, H6, Label, Text } from "../../assets/styles/typography.styled";

const StarIcon = ({ filled }) => (
  <svg
    width="20" 
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      fill={filled ? "#0A33F1" : "#1E1B19"}
    />
  </svg>
);

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon key={index} filled={index < rating} />
  ));

  return <div style={{ display: 'flex' }}>{stars}</div>;
};

const FeedbackCard = (props) => {
  return (
    <StyledContainer>
      <img src={props.photo} className="fb_photo" />
      <H7 className="fb_name">{props.name}</H7>
      <Label className="fb_type">{props.type}</Label>
      <span className="fb_stars">
        <StarRating rating={props.rating} />
      </span>
      <H6 className="fb_date">{props.date}</H6>
      <Text className="fb_comentary">{props.text}</Text>
    </StyledContainer>
  );
};

export default FeedbackCard;
