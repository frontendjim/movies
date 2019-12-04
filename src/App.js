import React from 'react';

// components
import Masthead from './components/masthead';
import MovieList from './components/movieList';

import { GlobalStyles, Container } from './App.styles';

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Masthead />
      <MovieList />
    </Container>
  );
}

export default App;
