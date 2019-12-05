import styled from 'styled-components';

import Rating from '../rating';

export const Container = styled.div`
  background-color: #000;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1rem;
  color: #fff;
  height: 20vw;
  margin: 0 2rem 4rem;
  border: 1px solid #666;
  overflow: hidden;
  padding: 3rem;
  position: relative;

  @media (min-width: 1000px) {
    flex: 0 0 calc(50% - 4rem);
  }

  @media (min-width: 1300px) {
    flex: 0 0 calc(33.333% - 4rem);
  }

  &:hover {
    .overlay {
      border-color: #fff;
      opacity: 0.2;
    }
  }
`;

export const Overlay = styled.div`
  background-color: #000;
  bottom: 0;
  left: 0;
  opacity: 0.4;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.2s ease-in-out;
  z-index: 5;
`;

export const Content = styled.div`
  position: relative;
  z-index: 10;
`;

export const Name = styled.h2`
  font-size: 2vw;
  font-weight: 700;
  line-height: 1.5;
  margin: 0 0 1.5rem;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const MovieRating = styled(Rating)`
  bottom: 2rem;
  position: absolute;
  right: 2rem;
  z-index: 10;
`;

export const Genres = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Genre = styled.li`
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 400;

  &:after {
    content: '|';
    margin: 0 0.3rem;
  }

  &:last-child {
    &:after {
      display: none;
    }
  }
`;
