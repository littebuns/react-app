import React, { useEffect, useState } from "react";

function Example() {
  // 通过依赖控制项控制执行时机
  const [count, setCount] = useState(0);
  const [name, setName] = useState("xxb");

  // 1. 默认状态, 初始化的时候执行一次  每次数据修改组件更新再次执行
  useEffect(() => {
    console.log("count 副作用执行");
    document.title = `you click ${count} times`;
  }, [count]); 

  // 2. 添加一共空数组依赖项 组件初始化的时候执行一次
  // useEffect(() => {
  //   console.log("count 副作用执行");
  //   document.title = `you click ${count} times`;
  // }, []); 

  // 3. 依赖特定项 依赖特定的项发生变化执行
  useEffect(() => {
    console.log("name 副作用执行");
  }, [name]);

  return (
    <div>
      <p>you click {count}times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <button onClick={()=>setName('xj')}>{name}</button>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Example></Example>
      </div>
    );
  }
}

export default App;
