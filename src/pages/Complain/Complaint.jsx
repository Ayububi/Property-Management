import React, { useState, useEffect } from "react";
import ComplaintForm from "./ComplaintForm";
import DataTable from "./CompainDataTable";

const Complaint = () => {
    const [complaints, setComplaints] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const headers = [
        { label: "Message", key: "message" },
        { label: "Category", key: "category" },
        { label: "Location", key: "location" },
        { label: "Date", key: "date" },
        { label: "Status", key: "status" },
    ];

useEffect(() => {
    const stored = localStorage.getItem("complaintData");

    try {
        const parsed = stored ? JSON.parse(stored) : [];
        const complaints = Array.isArray(parsed) ? parsed : [parsed];
        setComplaints(complaints);

        // Delay DataTable init after rendering
        setTimeout(() => {
            const table = $('#basic-datatable');
            if ($.fn.DataTable.isDataTable(table)) {
                table.DataTable().destroy(); // Avoid double init
            }
            table.DataTable();
        }, 100); // Slight delay ensures DOM is updated

    } catch (error) {
        console.error("Failed to parse complaint data:", error);
        setComplaints([]);
    }
}, []);


    // Add new complaint
    const handleNewComplaint = (newComplaint) => {
        const updated = [...complaints, newComplaint];
        setComplaints(updated);
        localStorage.setItem("complaintData", JSON.stringify(updated));
        setShowModal(false); // Close modal
    };

    return (
        <>
            <div className="container-fluid px-3">

                {/* start page title -*/}
                <div className="py-3 py-lg-4">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4 className="page-title mb-0">Complaints</h4>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-none d-lg-block">
                                <ol className="breadcrumb m-0 float-end">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Complaints</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end page title -*/}

                <div className="card">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start">
                            <div className="pe-3">
                                <h4 className="header-title">Customer Complaints</h4>
                                <p className="text-muted font-size-13 mb-4">
                                    DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function:
                                </p>
                            </div>
                            <div>
                                <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add Complaint</button>
                            </div>
                        </div>

                        <DataTable headers={headers} data={complaints} showActions={true} />
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div
                    className="modal fade show"
                    id="bs-example-modal-lg"
                    tabIndex="-1"
                    style={{ display: "block" }}
                    aria-modal="true"
                    role="dialog"
                >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Complaint</h4>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <ComplaintForm onSubmit={handleNewComplaint} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Complaint;
