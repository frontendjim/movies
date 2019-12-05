import styled from 'styled-components';

import star from '../../images/star.svg';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
`;

export const Star = styled.button`
  background-color: transparent;
  background-image: url(${star});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 0;
  display: inline-block;
  flex: 0 0 3.5rem;
  font-size: 1.4rem;
  font-weight: 700;
  height: 3.5rem;
  line-height: 3.9rem;
  opacity: 0.5;
  margin: 0 0.5rem 0.5rem;
  padding: 0;
  text-align: center;
  text-shadow: 1px 1px 0px #fff;
  width: 3.3rem;

  &.active {
    opacity: 1;
  }
`;
