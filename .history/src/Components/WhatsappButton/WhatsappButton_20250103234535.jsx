import React from 'react';
import whatsappIcon from '../../assets/icons/whatsapp.svg';
import styled from 'styled-components';

export const WhatsappButton = () => {
  const WhatsappMainBtn = a.styled`
      width: 10rem;
      height: 10rem;
  `
  return (
    <div>
        <a href="https://wa.me/5511939612000">
            <img src={whatsappIcon} alt="Ícone do WhatsApp"/>
        </a>
    </div>
  )
}
