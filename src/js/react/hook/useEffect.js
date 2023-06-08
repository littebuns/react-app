import React, { useState } from "react";

function Example() {
  // 解构赋值 useState 返回的是一个数组
  // 组件渲染的时候 组件内的代码会被执行
  // useState 的初始值只会在首次渲染的时候生效

  // 更新渲染
  // 函数再次执行 此时 count 值是修改后的值

  // 不能嵌套在其他函数中  只能写在组件的最外层
  const [count, setCount] = useState(0);

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
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Example />
      </div>
    );
  }
}

export default App;
