import React, { useState, useEffect, lazy, Suspense } from "react";

const LazyOverlay = lazy(() => import("../ProjectsOverlay/ProjectsOverlay"));

import { StyledCard } from "./Card.styled";
import Button from "../Button/Button";
import { H5 } from "../../assets/styles/typography.styled";
import { Text } from "../../assets/styles/typography.styled";

const Card = (props) => {

  const [showOverlay, setShowOverlay] = useState(false);
  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
    console.log("toggle ativado");
  };

  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showOverlay]);

  return (
    <div>
      <StyledCard className={props.className}>
        <img src={props.img} alt="" />

        <div className="card_wrapper">
          <H5 className="title">{props.title}</H5>
          <Text className="text1">
            Área: {props.area} <br />
            Tipo: {props.type} <br />
            Localização: {props.location}
            <br />
          </Text>
          <Text className="text2">
            Desafio: <br />
            {props.description}
          </Text>
          <Button
            texto="Veja Detalhes"
            className="btn"
            onClick={props.overlay ? toggleOverlay : null}
            destino={!props.overlay ? props.destino : null}
          />
        </div>
      </StyledCard>
      {showOverlay && <Suspense><LazyOverlay {...props} onClick={toggleOverlay} images={props.images} rating={props.rating}/></Suspense>}
    </div>
  );
};

export default Card;
