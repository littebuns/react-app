import React from "react";

function Hello() {
  const clickHandler = ()=>{
    console.log("事件触发");
  }
  return <div onClick={clickHandler}>Hello World</div>;
}

class HelloCompontent extends React.Component {
  clickHandler = ()=>{
    console.log("事件触发");
  }
  render() {
    return <span onClick={this.clickHandler}>Hello World</span>;
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
