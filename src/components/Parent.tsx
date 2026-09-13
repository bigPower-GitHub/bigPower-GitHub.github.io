import { useCallback, useState } from "react";
import Child from "./Child";

export default function Parent() {
  console.log("注意：Parent组件渲染了");
  const [count, setCount] = useState(0);

  const handleDelete = useCallback(() => {
    console.log("handleDelete方法执行了");
  }, []);

  return (
    <div
      style={{ width: "300px", backgroundColor: "#2c70b0", padding: "20px" }}
    >
      <button onClick={() => setCount(count + 1)}>
        点击按钮使父组件重新渲染
      </button>
      <Child id="1" name="BigPower" age={18} onDelete={handleDelete} />
    </div>
  );
}
