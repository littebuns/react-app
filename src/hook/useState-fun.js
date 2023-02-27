import { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(() => {
    return props.count * 10
  });

  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}> {count} </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter count="10"></Counter>
      <Counter count="20"></Counter>
    </div>
  );
}

export default App;
