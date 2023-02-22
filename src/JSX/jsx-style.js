import './JSX/css/app.css'

//行内样式 - 元素上绑定一个 style 属性
const style = {
  color: 'red',
  fontSize: 30
}

//内联样式 - 在元素上绑定一个 className 属性

//类名动态控制
const activeFlag = true
function App() {
  return (
    <div className="App">
      <span style={style}>this is a span</span>
      <br></br>
      <span className='active'>this is a span</span>
      <br></br>
      <span className={activeFlag?'active':''}>this is a span</span>
    </div>
  );
}

export default App;
