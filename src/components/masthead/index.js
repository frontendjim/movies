import React from 'react';

import { Container, Logo, LogoSmall } from './masthead.styles';

const Masthead = () => {
  return (
    <Container>
      <Logo>
        Movie <LogoSmall>Machine</LogoSmall>
      </Logo>
    </Container>
  );
};

export default Masthead;
