import React, { useRef, useState, useEffect } from "react";
import { StyledCarouselNew, Inner, Item } from "./MotionCarousel.styled";

const CarouselNew = ({ children }) => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    if (carousel.current) {
      const scrollWidth = carousel.current.scrollWidth;
      const offsetWidth = carousel.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);
    }
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
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

