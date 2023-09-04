import jspreadsheet from "jspreadsheet-ce";
import "jspreadsheet-ce/dist/jspreadsheet.css";
import { useEffect, useRef } from "react";

export const Jexcel = () => {
  const jRef = useRef(null);
  const options = {
    data: [
      ['Jazz', 'Honda', '2019-02-12', '', true, '$ 2.000,00', '#777700'],
      ['Civic', 'Honda', '2018-07-11', '', true, '$ 4.000,01', '#007777'],
  ],
    minDimensions: [2,2] as [number, number],
  //   columns: [
  //     { type: 'text', title:'Car', width:120 },
  //     { type: 'dropdown', title:'Make', width:200, source:[ "Alfa Romeo", "Audi", "Bmw" ] },
  //     { type: 'calendar', title:'Available', width:200 },
  //     { type: 'image', title:'Photo', width:120 },
  //     { type: 'checkbox', title:'Stock', width:80 },
  //     { type: 'numeric', title:'Price', width:100, mask:'$ #.##,00', decimal:',' },
  //     { type: 'color', width:100, render:'square', }
  // ]
  };

  useEffect(() => {
    if (!jRef.current.jspreadsheet) {
      jspreadsheet(jRef.current, options);
    }
  }, [options]);

  const addRow = () => {
    jRef.current.jexcel.insertRow();
  };

  return (
    <div>
      <div ref={jRef} />
      <input type="button" onClick={addRow} value="Add new row" />
    </div>
  );
};
