import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import '../../Style/scrollbar.css'; 

export default function ContainerTasks({ tasks, setTasks }) {
  // Recebe tasks e setTasks do Day.jsx como props

  // Função para marcar/desmarcar uma tarefa como concluída
  const toggleCompleted = (id, completed) => {
    // Recebe o id da tarefa e seu estado de conclusão
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed }),
    })
      .then((res) => res.json())
      .then((updatedTask) => {
        setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
      });
  };

  // Função para deletar uma tarefa
  const deleteTask = (id) => {
    // Recebe o id da tarefa a ser deletada
    fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" }).then(() =>
      setTasks(tasks.filter((task) => task.id !== id))
    );
  };

  return (
    <div className="bg-[#fffcfc] border-6 border-[#C6CBB2] rounded-3xl w-full h-90 p-5 overflow-auto custom-scrollbar">
      {/* Renderiza o input e o botão de adicionar tarefa */}
      <TaskInput tasks={tasks} setTasks={setTasks} />

      {/* Renderiza a lista de tarefas */}
      <TaskList
        tasks={tasks}
        toggleCompleted={toggleCompleted}
        deleteTask={deleteTask}
      />
    </div>
  );
}
