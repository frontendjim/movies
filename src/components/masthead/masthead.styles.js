import styled from 'styled-components';

export const Container = styled.header`
  background-color: #313639;
  box-shadow: 4px 0px 5px 0px rgba(204, 204, 204, 1);
  height: 100%;
  left: 0;
  padding: 3rem 2rem;
  position: fixed;
  top: 0;
  width: 30rem;
`;

export const Logo = styled.div`
  color: #fff;
  font-size: 5rem;
  position: relative;

  &:after {
    border-top: 2px dashed #ccc;
    bottom: 2.7rem;
    content: '';
    left: 0;
    position: absolute;
    width: 100%;
  }
`;

export const LogoSmall = styled.small`
  color: #ccc;
  display: block;
  font-size: 2rem;
  font-weight: 400;
  padding: 1.5rem 0 0 2rem;
  text-transform: uppercase;
`;
