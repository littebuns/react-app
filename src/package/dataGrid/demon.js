import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

// specify the data
const testRowData = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxster", price: 72000 },
];

function DataGridDemon() {
  const columnDefs = [
    { field: 'athlete' },
    // Using dot notation to access nested property
    { field: 'medals.gold', headerName: 'Gold' },
  ];

  const [rowData, setRowData] = useState();
  useEffect(() => {
    setRowData(testRowData);
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
}

export default DataGridDemon;
