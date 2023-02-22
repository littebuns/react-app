const name = 'xxb'
const getAge = ()=>{
  return 18
}
const flag = true

function App() {
  return (
    <div className="App">
      {name}
      {getAge()}
      {flag?"真的":"假的"}
    </div>
  );
}

export default App;
