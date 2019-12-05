import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label, Input } from './checkbox.styles';

const Checkbox = ({ label, value, checked, onChange, ...props }) => (
  <Container>
    <Label>
      <Input
        {...props}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange ? event => onChange(event.target.value) : null}
      />
      <span>{label}</span>
    </Label>
  </Container>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  checked: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: false,
  onChange: null,
};

export default Checkbox;
