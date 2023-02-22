// 创建一个函数组件
// 首字母必须是大写

import React from "react";

// 必须有返回值 即组件的 UI 结构
function Hello() {
  return <div>Hello World</div>;
}

//创建一个类组件
class HelloCompontent extends React.Component {
  render() {
    return <span>Hello World</span>;
  }
}

function App() {
  return (
    <div className="App">
      <Hello />
      <Hello></Hello>
      <HelloCompontent/>
    </div>
  );
}

export default App;
