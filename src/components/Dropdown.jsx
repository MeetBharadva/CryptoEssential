import React from 'react';
import { useState } from 'react';
export const Dropdown = ({ data, ddLabel, selectedData }) => {
  const [selectedOption, setSelectedOption] = useState(data[0].value);
  const onDropDownChange = (e) => {
    selectedData(e.target.value);
    setSelectedOption(e.target.value);
  };
  return (
    <div className="d-flex my-3">
      <label htmlFor={data.name} className="my-auto">
        {ddLabel}
      </label>
      <select
        class="form-select ms-2"
        style={{ maxWidth: '200px' }}
        name={data.name}
        id={data.name}
        value={selectedOption}
        onChange={(e) => onDropDownChange(e)}
      >
        {data &&
          data.map((singleData) => (
            <option key={singleData.id} value={singleData.value}>
              {singleData.name}
            </option>
          ))}
      </select>
    </div>
  );
};
