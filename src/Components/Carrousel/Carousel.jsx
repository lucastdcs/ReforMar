import React from "react";
import { CarouselContainer } from "./Carousel.styled";

const Carousel = ({ children }) => {
  return <CarouselContainer>{children}</CarouselContainer>;
};

export default Carousel;