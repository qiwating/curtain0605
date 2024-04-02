// PriceInput component code...
import React from 'react';
const PriceInput: React.FC<any> = ({ path, value, onChange }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(path, e.target.value)}
    />
  );
};

export default PriceInput;
