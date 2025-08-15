import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleCompleted, deleteTask }) {
  // Ordena as tarefas para que as concluídas apareçam no final
  const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);
  return (
    <ul className="mt-5 flex flex-col gap-2">
        {/* Mapeia as tarefas e renderiza cada uma como um TaskItem */}
      {sortedTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleCompleted={toggleCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}
