import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Overlay,
  Content,
  Name,
  MovieRating,
  Genres,
  Genre,
} from './movieItem.styles';

const MovieItem = ({ name, imageUrl, rating, genres, ...props }) => {
  const imageBase = 'https://image.tmdb.org/t/p/w500/';

  return (
    <Container image={`${imageBase}${imageUrl}`} {...props}>
      <Overlay className="overlay" />
      <Content>
        <Name>{name}</Name>
        {genres.length > 0 && (
          <Genres>
            {genres.map(({ name, id }) => (
              <Genre key={id}>{name}</Genre>
            ))}
          </Genres>
        )}
      </Content>
      <MovieRating rating={rating} />
    </Container>
  );
};

MovieItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

MovieItem.defaultProps = {
  genres: [],
};

export default MovieItem;
