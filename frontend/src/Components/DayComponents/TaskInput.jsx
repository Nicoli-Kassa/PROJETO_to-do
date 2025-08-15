import { useState } from "react";
export default function TaskInput({ tasks, setTasks }) {
  const [task, setTask] = useState("");

  // Função para adicionar uma nova tarefa
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: task }),
    })
      .then(res => res.json())
      .then(newTask => {
        setTasks([...tasks, newTask]);
        setTask("");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="w-full p-2 bg-[#C6CBB2] rounded-xl"
        type="text"
        placeholder="Write your task here..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="submit"
        className="bg-[#4C110A] border-[#811A0F] border-3 text-white text-3xl px-2 rounded-xl hover:bg-[#A42A1F] transition duration-200"
      >
        +
      </button>
    </form>
  );
}
