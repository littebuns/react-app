import { useNavigate } from "react-router-dom";

function Login() {
  // 跳转函数
  const navigate = useNavigate();

  function goAbout(){
    navigate('/about')
  }

  return (
    <div>
      <button onClick={goAbout}>Login</button>
    </div>
  );
}

export default Login;
