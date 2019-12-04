import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './rating.styles';

const Rating = ({ rating, ...props }) => {
  return (
    <Container {...props}>
      <span>{rating}</span>
    </Container>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
