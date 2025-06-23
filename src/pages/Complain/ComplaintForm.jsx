import React from "react";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";

const ComplaintForm = () => {
  return (

          <div className="card shadow-sm">
            <div className="card-header ">
              <h4 className="mb-0 ">Complaint Form</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="row g-3">
                  <div className="col-md-12">
                    <InputField label="Name" placeholder="Enter your name" />
                  </div>

                  <div className="col-md-12">
                    <InputField label="Email Address" placeholder="Enter email address" />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="message" className="form-label fw-medium text-dark">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Write your message..."
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 text-end">
                    <Button label="Submit" />
                  </div>
                </div>
              </form>
            </div>
          </div>
   
  );
};

export default ComplaintForm;
