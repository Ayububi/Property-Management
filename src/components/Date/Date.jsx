import React, { useState } from "react";

const DateInput = ({ label }) => {
  const [date, setDate] = useState("");

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="form-control"
      />
    </div>
  );
};

export default DateInput;
