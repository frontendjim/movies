import React from 'react';
import PropTypes from 'prop-types';

import { Container, Star } from './ratingFilter.styles';

const RatingFilter = ({ minRating, onClick }) => {
  const arr = Array.from(Array(10).keys());

  return (
    <Container>
      {arr.map(i => (
        <Star
          key={i}
          className={minRating <= i && 'active'}
          onClick={() => onClick(i)}
        >
          {i}
        </Star>
      ))}
    </Container>
  );
};

RatingFilter.propTypes = {
  minRating: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

RatingFilter.defaultProps = {
  minRating: 0,
};

export default RatingFilter;
