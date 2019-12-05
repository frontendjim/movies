import React, { createContext, useEffect, useState } from 'react';

// utils
import { api } from '../../utils/api';

export const GenreContext = createContext(null);

export default ({ children }) => {
  const [genres, updateGenres] = useState([]);

  const fetchGenres = async () => {
    const { data } = await api.get('/genre/movie/list');

    updateGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <GenreContext.Provider value={{ genres }}>{children}</GenreContext.Provider>
  );
};
