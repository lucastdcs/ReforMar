import React from 'react';
import whatsappIcon from '../../assets/icons/whatsapp.svg';
import styled from 'styled-components';

export const WhatsappButton = () => {
  const WhatsappMainBtn = styled.a`
      width: 10rem;
      height: 10rem;
  `
  return (
    <div>
        <WhatsappMainBtn href="https://wa.me/5511939612000">
            <img src={whatsappIcon} alt="Ícone do WhatsApp"/>
        </WhatsappMainBtn>
    </div>
  )
}
