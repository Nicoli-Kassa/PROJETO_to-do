import '../../Style/checkbox.css';

export default function TaskItem({ task, toggleCompleted, deleteTask }) {
  return (
    <li className="text-[20px] w-full px-3 py-2 border-b-3 border-[#C6CBB2] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={(e) => toggleCompleted(task.id, e.target.checked)}
          />
          <span className="checkmark"></span>
        </label>
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-[#4C110A] rounded-md w-[6%] h-8 flex items-center justify-center"
      >
        <span className="material-symbols-outlined text-white text-[18px]">delete</span>
      </button>
    </li>
  );
}
