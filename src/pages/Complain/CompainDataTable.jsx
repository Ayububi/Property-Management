import React from "react";

const CompainDataTable = ({ headers, data, onStatusChange, showActions = false }) => {
  return (
    <table id="basic-datatable" className="table dt-responsive nowrap w-100" >
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.key || header}>{header.label || header}</th>
          ))}
          {showActions && <th>Actions</th>}
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={ rowIndex}>
            {headers.map((header) => {
              const key = header.key || header;

 
              return <td key={`${rowIndex}-${key}`}>{row[key]}</td>;
            })}

            {showActions && (
              <td className="button-list" >
                
                <button className="btn btn-primary btn-xs waves-effect waves-light" onClick={() => alert(`Viewing item ${row.id}`)}>Edit</button>
                <button className="btn btn-danger btn-xs waves-effect waves-light" onClick={() => alert(`Deleting item ${row.id}`)}>Delete</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompainDataTable;
