import React from "react";
import InputField from "../../components/InputField/InputField";
import  Button  from "../../components/Button/Button";

const AdminForm = () => {
  return (
  <div className="min-vh-100 d-flex flex-column">
      <div className="flex-grow-1">
        <div className="card h-100 w-100 border-0">
          <div className="card-header">
         
            <div className="card-body">
              <form>
                <div className="row g-3 ">
                  <div className="col-md-6">
                    <InputField label="Full Name" placeholder="Enter full name" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Email Address" placeholder="Enter email address" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Username" placeholder="Choose a username" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Phone Number" placeholder="Enter phone number" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Password" placeholder="Enter password" type="password" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Confirm Password" placeholder="Re-enter password" type="password" />
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

export default AdminForm;
