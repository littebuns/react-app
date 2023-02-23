import React from "react";

class Test extends React.Component{
  // 如果数据需要影响到视图  定义到 state 中
  // 否则定义成普通的实例属性 尽量保证 state 精简
  timer = null

  componentWillUnmount(){
    // 一般用于清理定时器
    console.log('componentWillUnmount')
    clearInterval(this.timer)
  }

  componentDidMount(){
    console.log('componentDidMount')
    this.timer = setInterval(()=>{
      console.log('定时器执行');
    }, 1000)
  }

  render(){
    return (
      <div> this is div</div>
    )
  }
}

class App extends React.Component {
  constructor() {
    super();
    console.log('constructor');
  }

  state = {
    count: 0,
    testFlag: true
  }

  addCount = ()=>{
    this.setState({
      count: this.state.count + 1
    })
  }

  changeFlag = ()=>{
    this.setState(
      {
        testFlag : !this.state.testFlag
      }
    )
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
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

        <button onClick={this.changeFlag}>改变 Test 显示</button>
        {this.state.testFlag?<Test/>:null}

      </div>
    );
  }
}


export default App;
