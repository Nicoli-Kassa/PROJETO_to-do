import { useState, useEffect } from "react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Atualiza a data a cada minuto (60000ms)
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    // Limpa o intervalo ao desmontar
    return () => clearInterval(interval);
  }, []);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayName = days[currentDate.getDay()];
  const dayNumber = currentDate.getDate();
  const monthName = months[currentDate.getMonth()];

  return (
    <div className="bg-[#4C110A] border-6 border-[#811A0F] rounded-3xl text-white h-full
                    flex flex-col items-center justify-center gap-5 p-5">
      <p className="text-[24px]">{dayName}</p>
      <p className="bg-[#811A0F] text-[35px] flex items-center justify-center rounded-full w-[55%] h-[40%]">
        {dayNumber}
      </p>
      <p className="text-[24px]">{monthName}</p>
    </div>
  );
}
