import { memo } from "react";

interface ChildProps {
  id: string;
  name: string;
  age?: number;
  onDelete: Function;
}

export default memo(function Child({
  id,
  name,
  age = 0,
  onDelete,
}: ChildProps) {
  console.log("注意：Child组件渲染了");
  return (
    <div style={{ background: "pink", textAlign: "left" }}>
      <p>ID：{id}</p>
      <p>名字：{name}</p>
      <p>年龄：{age}</p>
      <button onClick={() => onDelete(id)}>删除</button>
    </div>
  );
});
