function Hello() {
    // 只需要一个参数
    const clickHandler1 = (msg) => {
      console.log(msg);
    };
  
    // 既需要 e 又需要参数
    const clickHandler2 = (e, msg) => {
      console.log("事件触发", e, msg);
    };
  
    return (
      <>
        <div onClick={() => clickHandler1("msg")}>click me</div>
        <div onClick={(e) => clickHandler2(e, "msg")}>click me</div>
      </>
    );
  }
  
  function App() {
    return (
      <div className="App">
        <Hello></Hello>
      </div>
    );
  }
  
  export default App;
  