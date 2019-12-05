import React, { useReducer, useEffect, useContext, useMemo } from 'react';
import { intersection } from 'lodash/array';

// components
import MovieItem from '../movieItem';

// state
import reducer, { initialState, actionTypes } from '../../state/movies';
import { GenreContext } from '../../state/genres';
import { FilterContext } from '../../state/filters';

// utils
import { api } from '../../utils/api';

import { Container } from './movieList.styles';

const MovieList = () => {
  const [{ list, loading }, dispatch] = useReducer(reducer, initialState);
  const { genres } = useContext(GenreContext);
  const { minRating, selectedGenres } = useContext(FilterContext);

  const fetchMovies = async () => {
    dispatch({ type: actionTypes.FETCH_MOVIES });

    const {
      data: { results },
    } = await api.get('/movie/now_playing');

    dispatch({ type: actionTypes.FETCH_MOVIES_SUCCESS, list: results });
  };

  const getFormattedMovies = useMemo(() => {
    if (loading || !genres.length) return [];

    return list
      .filter(movie => {
        // filter by genres
        const commonGenres = intersection(selectedGenres, movie.genre_ids);

        return commonGenres.length === selectedGenres.length;
      })
      .filter(movie => movie.vote_average >= minRating)
      .map(movie => {
        // populate genre details for render
        const populatedGenres = genres.filter(genre =>
          movie.genre_ids.includes(genre.id)
        );

        return { ...movie, populatedGenres };
      });
  }, [genres, list, loading, minRating, selectedGenres]);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Container>
      {getFormattedMovies.map(movie => (
        <MovieItem
          key={movie.id}
          name={movie.title}
          imageUrl={movie.backdrop_path}
          rating={movie.vote_average}
          genres={movie.populatedGenres}
        />
      ))}
    </Container>
  );
};

export default MovieList;
