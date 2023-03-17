import { useEffect } from "react";

function App() {
  useEffect(() => {
    function loadData() {
      fetch("http://geek.itheima.net/v1_0/channels")
        .then((Response) => Response.json())
        .then((data) => console.log(data));
    }
    loadData()
  },[]);
  return <div></div>;
}

export default App;
