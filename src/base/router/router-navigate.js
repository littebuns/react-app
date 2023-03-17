import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/About";
import Login from "./router/Login";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      <Link to="/login">登录</Link>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
