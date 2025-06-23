import React from "react";
import InputField from "../../components/InputField/InputField";
import DateInput from "../../components/Date/Date";
import  Button  from "../../components/Button/Button";
const TenantForm = () => {
  return (
     <div className="min-vh-100 d-flex flex-column">
      <div className="flex-grow-1">
        <div className="card h-100 w-100 border-0">
          <div className="card-header">
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
                    <InputField label="Address" placeholder="Enter your address" id="address" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Rent Amount" placeholder="Enter rent amount" id="rentAmount" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Security Deposit" placeholder="Enter security deposit" id="securityDeposit" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Password" placeholder="Enter password" type="password" id="password" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Confirm Password" placeholder="Re-enter password" type="password" id="confirmPassword" />
                  </div>
                  <div className="col-md-6">
                    <DateInput label="Rent Start Date" id="startDate" />
                  </div>
                  <div className="col-md-6">
                    <DateInput label="Rent End Date" id="endDate" />
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

export default TenantForm;
