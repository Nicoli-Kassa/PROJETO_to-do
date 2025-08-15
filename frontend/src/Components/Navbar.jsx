import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center gap-100 py-5">
      <h1 className="text-[#4C110A] text-[30px] font-bold">TO DO LIST</h1>
      <ul className="flex gap-10">
        <li className="text-[#4C110A] text-[25px]">
          <NavLink
            to="/day"
            className={({ isActive }) =>
              isActive ? "border-b-5 font-bold" : "text-[4C110A]"
            }
          >
            Day
          </NavLink>
        </li>
        <li className="text-[#4C110A] text-[25px]">
          <NavLink
            to="/month"
            className={({ isActive }) =>
              isActive ? "border-b-5 font-bold" : "text-[4C110A]"
            }
          >
            Month
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
