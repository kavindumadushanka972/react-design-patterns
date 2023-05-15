import React, { useState } from 'react';
import { styled } from 'styled-components';

const ModalBackground = styled.div``;
const ModalBody = styled.div``;

export const Modal = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShow(true)}>Show Modal</button>
      {shouldShow && (
        <ModalBackground>
          <ModalBody>{children}</ModalBody>
        </ModalBackground>
      )}
    </>
  );
};
