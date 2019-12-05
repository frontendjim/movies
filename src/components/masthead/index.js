import React from 'react';

// components
import Filters from '../filters';

import { Container, Logo, LogoSmall } from './masthead.styles';

const Masthead = () => {
  return (
    <Container>
      <Logo>
        Movie <LogoSmall>Machine</LogoSmall>
      </Logo>
      <Filters />
    </Container>
  );
};

export default Masthead;
