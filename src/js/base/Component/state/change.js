import React from "react";

class TestComponent extends React.Component {
  // 这里可以定义各种属性 即当前组件的状态
  state = {
    name: "xxb",
  };

  changeName = () => {
    console.log(this.state.name);
    //不可以直接赋值修改 state
    this.setState({
      name: 'xj'
    })
  };

  render() {
    return (
      <div>
        this is a component 当前name为 : {this.state.name}
        <button onClick={this.changeName}>改变name</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <TestComponent />
    </div>
  );
}

export default App;
