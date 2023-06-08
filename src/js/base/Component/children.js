import React from "react";

function ListItem({children}){
  return (
    <div>
      this is a item, {children}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <ListItem>
        <div>this is a div</div>
        <span>this is a span</span>
      </ListItem>
    </div>
  );
}

export default App;
