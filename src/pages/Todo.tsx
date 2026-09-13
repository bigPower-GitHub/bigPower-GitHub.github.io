import { useState, useEffect } from "react";
import "./Todo.css";
import TaskItem from "./TaskItem";

interface Task {
  id: string;
  title: string;
}

export default function Todo() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("my-todo-tasks");
    if (savedTasks && JSON.parse(savedTasks).length > 0) {
      try {
        return JSON.parse(savedTasks);
      } catch (e) {
        console.error("读取本地数据解析失败", e);
      }
    }
    return [];
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("my-todo-tasks", JSON.stringify(tasks));
  }, [tasks]);

  // 添加任务
  function handleAdd() {
    if (inputValue.trim() === "") return;
    const newTask: Task = { id: String(Date.now()), title: inputValue };
    setTasks([...tasks, newTask]);
    setInputValue("");
  }

  // 删除任务
  function handleDelete(delId: string) {
    setTasks((prev) => prev.filter((item) => item.id !== delId));
  }

  return (
    <div className="todo-container">
      <h1 className="todo-header">我的待办事项</h1>
      <div className="todo-input-group">
        <input
          className="todo-input"
          type="text"
          value={inputValue}
          placeholder="请输入任务..."
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button className="todo-button" onClick={handleAdd}>
          添加任务
        </button>
      </div>

      <ul className="todo-list">
        {tasks.length === 0 ? (
          <p className="empty-tip">暂无任务，快去添加吧</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              onDelete={handleDelete}
            />
          ))
        )}
      </ul>
    </div>
  );
}
