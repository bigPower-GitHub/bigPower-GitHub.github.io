import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleTodo = () => {
    navigate("/todo");
  };

  return (
    <div>
      <h1>首页</h1>
      <button onClick={handleTodo}>跳转到 Todo 页面</button>
    </div>
  );
}
