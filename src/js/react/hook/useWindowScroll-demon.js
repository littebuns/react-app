import {useWindowScroll} from './hook/useWindowScroll';

function App() {
  return (
    <div style={{height:'2000px'}}>
      {useWindowScroll()}
    </div>
  );

}

export default App;
