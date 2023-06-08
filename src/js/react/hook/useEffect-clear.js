import { useEffect, useState } from "react";

function Counter() {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('111');
    }, 500);
    return ()=>{
      clearInterval(timer)
    }
  });

  return <div>this is a div</div>;
}

function App() {
  const [flag, changeFlag] = useState(true);

  return (
    <div>
      {flag ? <Counter /> : null}
      <button
        onClick={() => {
          changeFlag(!flag);
        }}
      >
        显示/隐藏
      </button>
    </div>
  );
}

export default App;
