import Navbar from "./Components/Navbar/Navbar.jsx";
import { useState, useEffect } from "react";
function App() {
  const [mobile, setMobile] = useState(window.innerWidth < 768);
  const MOBILE_BREAKPOINT = 768;
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="min-h-screen w-full bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="p-4">
        <Navbar mobile={mobile} />
      </div>
    </div>
  );
}

export default App;