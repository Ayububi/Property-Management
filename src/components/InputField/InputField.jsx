import React from "react";

const InputField = ({ id, label, placeholder, type = "text", value, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="form-control"
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
