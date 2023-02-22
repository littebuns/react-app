//便利列表时需要一个 key
const songs = [
  { id: 1, name: "没有理想的人不伤心" },
  { id: 2, name: "南山南" },
  { id: 3, name: "爱人错过" },
];

function App() {
  return (
    <div className="App">
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
