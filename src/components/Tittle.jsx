import React from "react";

const Tittle =({ title })=>{
  return(
                   <div className="py-3 py-lg-4">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4 className="page-title">{title}</h4>
                            </div>
                            <div className="col-lg-6">
                               <div className="d-none d-lg-block">
                                <ol className="breadcrumb m-0 float-end">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Lunoz</a></li>
                                    <li className="breadcrumb-item active">{title}</li>
                                </ol>
                               </div>
                            </div>
                        </div>
                    </div>
)};
export default Tittle;