import { useNavigate } from "react-router-dom";

export default function BtnFinishDay({ tasks }) {
  const navigate = useNavigate();

  const finishDay = () => {
    const today = new Date();
    const data = {
      weekday: today.toLocaleDateString("en-US", { weekday: "long" }),
      date: today.toLocaleDateString("en-US"),
      tasks,
    };
    navigate("/month", { state: data });
  };

  return (
    <div>
      <button
        onClick={finishDay}
        className="bg-[#4C110A] border-6 border-[#811A0F] rounded-3xl
                w-full p-3 text-white text-[25px] mt-7
                hover:bg-[#811A0F] transition-colors duration-300 cursor-pointer"
      >
        FINISH DAY
      </button>
    </div>
  );
}
