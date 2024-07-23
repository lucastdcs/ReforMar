import React, { useRef, useState, useEffect } from "react";
import { StyledCarouselNew, Inner, Item } from "./MotionCarousel.styled";

const CarouselNew = ({ children }) => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);
  return (
    <>
      <StyledCarouselNew ref={carousel} whileTap={{ cursor: "grabbing" }}>
        <Inner drag="x" dragConstraints={{ right: 0, left: -width }}>
          {React.Children.map(children, (child, index) => (
            <Item key={index}>{child}</Item>
          ))}
        </Inner>
      </StyledCarouselNew>
    </>
  );
};

export default CarouselNew;
