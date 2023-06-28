import jspreadsheet from "jspreadsheet-ce";
import { useEffect, useRef } from "react";

export const Jexcel = () => {
  const jRef = useRef(null);
  const options = {
    data: [[]],
    minDimensions: [1, 1],
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
      <br />
      <input type="button" onClick={addRow} value="Add new row" />
    </div>
  );
};
