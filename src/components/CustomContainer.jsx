import React from 'react';
import { Container } from 'reactstrap';

const CustomContainer = ({ children }) => {
  return (
    <Container
      style={{
        maxWidth: 800,
      }}
    >
      {children}
    </Container>
  );
};

export default CustomContainer;
