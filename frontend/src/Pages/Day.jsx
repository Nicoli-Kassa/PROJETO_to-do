import { useState, useEffect } from "react";

import Navbar from "../Components/Navbar";


import ProgressBar from "../Components/DayComponents/ProgressBar";
import ContainerTasks from "../Components/DayComponents/ContainerTasks";
import Calendar from "../Components/DayComponents/Calendar";
import BtnFinishDay from "../Components/DayComponents/BtnFinishDay";

export default function Day() {
  const [tasks, setTasks] = useState([]);

  // Carregar tasks do backend ao iniciar o componente
  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div>

      {/* Barra de progresso recebe as tasks */}
      <ProgressBar tasks={tasks} />

      <div className="flex flex-row mx-15 mt-10 gap-5">
        {/* Container recebe tasks e setTasks */}
        <ContainerTasks tasks={tasks} setTasks={setTasks} />

        {/* Calendar and Button */}
        <div className="flex flex-col w-[30%] ">
          {/* Calendar */}
          <Calendar />
          {/* Button */}
          <BtnFinishDay />
        </div>
      </div>
    </div>
  );
}
