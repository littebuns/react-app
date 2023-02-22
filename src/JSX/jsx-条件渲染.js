//条件渲染

//三元表达式
const flag = true;

//分支
const getHTage = (type)=>{
  switch(type){
    case 1:
      return <h1>1</h1>
    case 2:
      return <h2>2</h2>  
    case 3:
      return <h3>3</h3>  
    default:
      return null  
  }
}

function App() {
  return (
    <div className="App">
      {flag?(
      <span>
        this is a span
      </span>):null}

      {getHTage(2)}
    </div>
  );
}

export default App;
