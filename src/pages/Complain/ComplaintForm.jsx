import React, { useState } from "react";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";

const ComplaintForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    category: "",
    message: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add date and status
    const newComplaint = {
      ...formData,
      date: new Date().toISOString().split("T")[0],
      status: "Open",
    };

    onSubmit(newComplaint); // Send to parent
    setFormData({ category: "", message: "", location: "" }); // Clear form
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header">
        <h4 className="mb-0">Complaint Form</h4>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-12">
              <InputField
                id="category"
                label="Category"
                name="category"
                placeholder="Enter Category"
                value={formData.category}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-12">
              <label htmlFor="message" className="form-label">Enter Your Complaint</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="5"
                placeholder="Write your Complaint..."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-md-12">
              <InputField
                id="location"
                label="Location"
                name="location"
                placeholder="Enter your Location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className="col-12 text-end">
              <Button label="Submit" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;
