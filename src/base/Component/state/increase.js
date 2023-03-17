import React from "react";

class Counter extends React.Component {
  // 这里可以定义各种属性 即当前组件的状态
  state = {
    count: 0,
  };

  changeName = () => {
    console.log(this.state.count);
    //不可以直接赋值修改 state
    // this.setState((state, props) => {
    //   return { count: state.count + 1 };
    // });
    this.setState({
      count: this.state.count + 1
    })
  };

  render() {
    return (
      <div>
        this is a component count : {this.state.count}
        <button onClick={this.changeName}>增加</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
