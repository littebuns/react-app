import { useState, useRef, useEffect, useCallback } from "react";
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
  const gridRef = useRef(); // Optional - for accessing Grid's API

  const [columnDefs] = useState([
    { field: "make", filter: true },
    { field: "model", filter: true },
    { field: "price" },
  ]);

  const [rowData, setRowData] = useState();
  useEffect(() => {
    setRowData(testRowData);
  }, []);

  const buttonListener = useCallback((e) => {
    console.log(1);
    gridRef.current.api.deselectAll();
  }, []);

  return (
    <>
      <button onClick={buttonListener}>Push Me</button>

      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          rowData={rowData}
          ref={gridRef}
          columnDefs={columnDefs}
        ></AgGridReact>
      </div>
    </>
  );
}

export default DataGridDemon;
