import React from 'react';
import whatsappIcon from '../../assets/icons/whatsapp.svg';
import styled from 'styled-components';

export const WhatsappButton = () => {
  const WhatsappMainBtn = styled.a`
      width: 15rem;
      height: 15rem;
      position: absolute;
      right: 0;
      bottom: 0;
  `
  return (
    <div>
        <WhatsappMainBtn href="https://wa.me/5511939612000">
            <img src={whatsappIcon} alt="Ícone do WhatsApp"/>
        </WhatsappMainBtn>
    </div>
  )
}
