import React from "react";
import InputField from "../../components/InputField/InputField";
import  Button  from "../../components/Button/Button";
const OwnerForm = () => {
  return (
    <div className="container-fluid py-5 bg-light min-vh-100">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          <div className="card shadow-sm">
            <div className="card-header  text-white">
              <h4 className="mb-0 ">Owner Form</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <InputField label="Full Name" placeholder="Enter full name" id="fullName" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Email Address" placeholder="Enter email address" id="email" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Phone Number" placeholder="Enter phone number" id="phone" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Password" placeholder="Enter password" type="password" id="password" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Confirm Password" placeholder="Re-enter password" type="password" id="confirmPassword" />
                  </div>
                  <div className="col-12 text-end">
                    <Button label="Submit" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerForm;
