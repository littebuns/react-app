import React from "react";

function Hello() {
  const clickHandler = (e) => {
    //阻止默认行为
    e.preventDefault();
    console.log("事件触发", e);
  };
  return (
    <div>
      <a onClick={clickHandler} href="http://www.baidu.com">
        Hello World
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Hello />
      <Hello></Hello>
    </div>
  );
}

export default App;
