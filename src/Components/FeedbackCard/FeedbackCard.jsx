import React from "react";
import StyledContainer from "./FeedbackCard.styled";
import { H7, H6, Label, Text } from "../../assets/styles/typography.styled";
import Stars from "../../assets/icons/feedback_stars.svg";

const FeedbackCard = (props) => {
  return (
    <StyledContainer>
      <img src={props.photo} className="fb_photo" />
      <H7 className="fb_name">{props.name}</H7>
      <Label className="fb_type">{props.type}</Label>
      <span className="fb_stars">
        <img src={Stars} />
      </span>
      <H6 className="fb_date">{props.date}</H6>
      <Text className="fb_comentary">
        {props.text}
      </Text>
    </StyledContainer>
  );
};

export default FeedbackCard;
