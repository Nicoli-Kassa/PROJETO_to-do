import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Month() {
  const { state } = useLocation();
  const { weekday, date } = state || {};
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 w-full h-full items-center justify-center">
        <ul className="mt-2 w-full flex flex-col gap-2">
          <div className="bg-[#fffcfc] border-6 border-[#C6CBB2] rounded-3xl w-full h-85 p-5 overflow-auto custom-scrollbar flex flex-col items-center">
            <h3 className="text-[24px] font-bold">{date}</h3>
            <p className="text-[#4C110A] text-[21px] font-semibold">
              {weekday}
            </p>

            {tasks.map((t) => (
              <li
                className="text-[15px] w-full px-3 py-2 border-b-3 border-[#C6CBB2] flex items-center justify-between"
                key={t.id}
              >
                <span
                  style={{
                    textDecoration: t.completed ? "line-through 2px" : "none",
                  }}
                >
                  {t.text}
                </span>
              </li>
            ))}
          </div>
        </ul>
        
      </div>
    </>
  );
}
