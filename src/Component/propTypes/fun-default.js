import React from "react";

function Test({ pageSize = 10 }) {
  return (
    <div>
      this is a div {pageSize}
    </div>
  );
}

// 不推荐的写法
// Test.defaultProps = {
//   pageSize: 10
// }

function App() {
  return (
    <div className="App">
      <Test pageSize={1}></Test>
    </div>
  );
}

export default App;
