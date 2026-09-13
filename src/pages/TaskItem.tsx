import "./TaskItem.css";

interface TaskItemProps {
  id: string;
  title: string;
  onDelete: (id: string) => void;
}

export default function TaskItem(props: TaskItemProps) {
  const { id, title, onDelete } = props;

  return (
    <div className="task-item">
      <span className="task-title">{title}</span>
      <button className="task-delete-btn" onClick={() => onDelete(id)}>
        删除
      </button>
    </div>
  );
}
