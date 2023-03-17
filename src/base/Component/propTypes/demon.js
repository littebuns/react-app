import React from "react";
import PropTypes from "prop-types";

function Test({ list }) {
  return (
    <div>
      {list.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

// 定义各种规则
Test.propTypes = {
  // 定义list参数必须是个数组
  list: PropTypes.array
};

function App() {
  return (
    <div className="App">
      <Test list={[1,2,3]}></Test>
    </div>
  );
}

export default App;
