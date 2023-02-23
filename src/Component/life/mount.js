import React from "react";

class App extends React.Component {
  constructor() {
    super();
    console.log('constructor');
  }

  state = {
    count: 0
  }

  addCount = ()=>{
    this.setState({
      count: this.state.count + 1
    })
  }


  componentDidMount(){
    // 类似于 vue 的 mount ajax
    console.log('componentDidMount');
  }

  render() {
    return (
      <div className="App">
        {console.log('render')}
        {this.state.count}
        <button onClick={this.addCount}>增加</button>
      </div>
    );
  }
}


export default App;
