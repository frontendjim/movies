import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 0 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  padding: 0 0 0 3rem;
  position: relative;

  &:before {
    border: 1px solid #fff;
    border-radius: 2px;
    content: '';
    display: inline-block;
    height: 2rem;
    left: 0;
    position: absolute;
    top: -1px;
    width: 2rem;
  }
`;

export const Input = styled.input`
  position: absolute;
  left: -9999px;

  &:checked + span {
    font-weight: 700;

    &:before {
      border-bottom: 2px solid #fff;
      border-left: 2px solid #fff;
      content: '';
      display: inline-block;
      height: 0.5rem;
      left: 0.4rem;
      position: absolute;
      top: 0.5rem;
      transform: rotate(-45deg);
      width: 1.3rem;
    }
  }
`;
