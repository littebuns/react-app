import React from "react";

class Test extends React.Component{

  static defaultProps = {
    pageSize: 10
  }

  render(){
    return (
      <div>this is a div {this.props.pageSize}</div>
    )
  }
}

// Test.defaultProps = {
//   pageSize: 10
// }

function App() {
  return (
    <div className="App">
      <Test pageSize={20}></Test>
    </div>
  );
}

export default App;
