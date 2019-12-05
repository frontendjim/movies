import styled from 'styled-components';

export const Container = styled.div``;

export const Filter = styled.div`
  border: 1px solid #666;
  margin: 0 0 2rem;
  padding: 2rem 0 2rem 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 2rem;
  padding: 0;
`;

export const GenreFilter = styled.div`
  height: 25rem;
  overflow: hidden;
  overflow-y: auto;
  padding: 1rem 2rem 0 0;
`;

export const ResetFilter = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 3px;
  color: #fff;
  display: block;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;
