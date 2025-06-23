import React, { useState } from "react";

const MyDropdown = ({ label, options = [] }) => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select
        className="form-select hover:bg-dark"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="" >{`Select ${label}`}</option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MyDropdown;
