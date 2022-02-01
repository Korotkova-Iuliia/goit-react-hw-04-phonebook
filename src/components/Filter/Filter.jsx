import React from "react";
import PropTypes from "prop-types";
import { Input, Label } from "./Filter.styled";
const Filter = ({ filter, onChange }) => {
  return (
    <Label>
      <Input
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Surch Name in contacts"
      />
    </Label>
  );
};
export default Filter;
Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
