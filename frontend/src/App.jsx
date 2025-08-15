import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-[#B53325] h-screen">
      <Navbar />
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
