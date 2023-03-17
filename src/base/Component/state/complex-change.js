import React from "react";

//复杂 state 对象修改
class Counter extends React.Component {
  state = {
    addItems : [
      1,
      2,
      3
    ],
    deleteItems : [
      1,
      2,
      3
    ],
    person: {
      name: 'xxb',
      age: 18
    }
  };

  changeName = () => {

    this.setState({
      addItems: [
        ...this.state.addItems,
        4
      ],
      person: {
        ...this.state.person,
        name: 'xj'
      },
      deleteItems : this.state.deleteItems.filter((item)=>{return item !== 2})
    })
  };

  render() {
    return (
      <div>
        <span>要添加元素的数组</span>
        <ul>
          {this.state.addItems.map((item)=>{return <li key={item}>{item}</li>})}
        </ul>
        <span>要删除元素的数组</span>
        <ul>
          {this.state.deleteItems.map((item)=>{return <li key={item}>{item}</li>})}
        </ul>
        {this.state.person.name}
        <button onClick={this.changeName}>改变 state</button>
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
