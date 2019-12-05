import React, { useContext } from 'react';

// components
import Checkbox from '../checkbox';
import RatingFilter from '../ratingFilter';

// context
import { FilterContext } from '../../state/filters';
import { GenreContext } from '../../state/genres';

import {
  Container,
  Heading,
  Filter,
  GenreFilter,
  ResetFilter,
} from './filters.styles';

const Filters = () => {
  const { minRating, selectedGenres, actions } = useContext(FilterContext);
  const { genres } = useContext(GenreContext);

  const handleGenreSelect = id => actions.setGenre(id);

  return (
    <Container>
      <Filter>
        <Heading>Filter by genre</Heading>

        <GenreFilter>
          <Checkbox
            label="All genres"
            checked={selectedGenres.length < 1}
            value="All"
            onChange={() => handleGenreSelect('all')}
          />

          {genres.length > 0 &&
            genres.map(genre => (
              <Checkbox
                key={genre.id}
                label={genre.name}
                value={genre.id}
                checked={!!selectedGenres.find(id => id === genre.id)}
                onChange={handleGenreSelect}
              />
            ))}
        </GenreFilter>
      </Filter>

      <Filter>
        <Heading>Filter by min. rating</Heading>
        <RatingFilter minRating={minRating} onClick={actions.setRating} />
      </Filter>

      <ResetFilter onClick={actions.resetFilters}>RESET FILTERS</ResetFilter>
    </Container>
  );
};

export default Filters;
