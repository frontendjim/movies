import styled from 'styled-components';

import star from '../../images/star.svg';

export const Container = styled.div`
  align-items: center;
  background-image: url(${star});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #000;
  display: flex;
  font-size: 1.8rem;
  font-weight: 700;
  justify-content: center;
  height: 6rem;
  line-height: 1;
  width: 6rem;

  span {
    position: relative;
    top: 3px;
  }
`;
