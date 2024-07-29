import React from 'react';
import ReactDOM from 'react-dom';

const OverlayPortal = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById('overlay-root') // Certifique-se de ter um elemento com este ID no seu HTML
  );
};

export default OverlayPortal;
