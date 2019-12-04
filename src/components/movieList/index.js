import React, { useReducer, useEffect, useContext, useMemo } from 'react';

// components
import MovieItem from '../movieItem';

// state
import reducer, { initialState, actionTypes } from '../../state/movies';
import { GenreContext } from '../../state/genres';

// utils
import { api } from '../../utils/api';

import { Container } from './movieList.styles';

const MovieList = () => {
  const [{ list, loading }, dispatch] = useReducer(reducer, initialState);
  const { genres } = useContext(GenreContext);

  const fetchMovies = async () => {
    dispatch({ type: actionTypes.FETCH_MOVIES });

    const {
      data: { results },
    } = await api.get('/movie/now_playing');

    dispatch({ type: actionTypes.FETCH_MOVIES_SUCCESS, list: results });
  };

  const getFormattedMovies = useMemo(() => {
    if (loading || !genres.length) return [];

    console.log(list);

    return list.map(movie => {
      const populatedGenres = genres.filter(genre =>
        movie.genre_ids.includes(genre.id)
      );

      return { ...movie, populatedGenres };
    });
  }, [genres, list, loading]);

  useEffect(() => {
    fetchMovies();
  }, []);

  console.log(getFormattedMovies);

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
