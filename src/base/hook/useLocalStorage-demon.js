import {useLocalStorage} from './hook/useLocalStorage';

function App() {
  const [message, setMessage] = useLocalStorage('name', 'xxb')

  setTimeout(
    ()=>{
      setMessage('xj')
    }, 2000
  )

  return (
    <div>
      {message}
    </div>
  );

}

export default App;
