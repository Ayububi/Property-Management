import React from "react";
import InputField from "../../components/InputField/InputField";
import  Button  from "../../components/Button/Button";
const UserForm = () => {
  return (
       <div className="min-vh-100 d-flex flex-column">
      <div className="flex-grow-1">
        <div className="card h-100 w-100 border-0">
          <div className="card-header">

            <div className="card-body">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <InputField label="Name" placeholder="Enter name" id="name" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Email" placeholder="Enter email" id="email" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Phone" placeholder="Enter phone" id="phone" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="City" placeholder="Enter city" id="city" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Country" placeholder="Enter country" id="country" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Zip" placeholder="Enter zip code" id="zip" />
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

export default UserForm;
