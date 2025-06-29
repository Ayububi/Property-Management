import React from "react";
import InputField from "../../components/InputField/InputField";
import MyDropdown from "../../components/DropDown/DropDown";
import Button from "../../components/Button/Button";

const PropertyForm = () => {
  const opt = ["Recurring", "One time"];
  const activity = ["Yes", "No"];
  const property = [
    "Retail Shop in Plaza",
    "Food Court Outlet",
    "Office in Plaza",
    "Flat",
    "Showroom",
    "Game Zone / Cinema",
    "Anchor Store",
    "Storage Room",
    "Roof Billboard Space"
  ];

  return (
      <div className="min-vh-100 d-flex flex-column">
      <div className="flex-grow-1">
        <div className="card h-100 w-100 border-0">
          <div className="card-header">
            <div className="card-body">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <InputField label="Name" placeholder="Enter property name" />
                  </div>
                  <div className="col-md-6">
                    <MyDropdown label="Select Type" options={opt} />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Amount" placeholder="Enter amount" />
                  </div>
                  <div className="col-md-6">
                    <MyDropdown label="Property Type" options={property} />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Sqyard From" type="number" placeholder="From" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Sqyard To" type="number" placeholder="To" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Sqft From" type="number" placeholder="From" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Sqft To" type="number" placeholder="To" />
                  </div>
                  <div className="col-md-6">
                    <MyDropdown label="Is Active" options={activity} />
                  </div>
                  <div className="col-12 text-end">
                    <Button label="Save" />
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

export default PropertyForm;
