import Select from "antd/Select";
import Step from "antd/Step";
import MainContent from "MainContent";
import { Jexcel } from "package/jspreadsheet";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {window.location.href.includes("test") ? (
        <Routes>
          <Route path="/test/select" element={<Select />}></Route>
          <Route path="/test/step" element={<Step />}></Route>
          <Route path="/test/jexecl" element={<Jexcel />}></Route>
        </Routes>
      ) : (
        <MainContent />
      )}
    </BrowserRouter>
  );
}

export default App;
