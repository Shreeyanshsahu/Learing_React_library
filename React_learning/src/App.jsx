import Navbar from "./Components/Navbar/Navbar.jsx";
import { useState, useEffect } from "react";
import Categories from "./Components/Categories/Categories.jsx";
import AppContent from "./Components/AppContent/Appcontent.jsx";

function App() {
  const MOBILE_BREAKPOINT = 768;
  const [mobile, setMobile] = useState(
    window.innerWidth < MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Blurred Background */}
      <div
        className="
          fixed
          inset-0
          -z-20
          bg-cover
          bg-center
          bg-no-repeat
          blur-xs
          scale-110
        "
        style={{
          backgroundImage: "url('/Bkglib.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/25" />

      {/* App */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="p-2">
          <Navbar mobile={mobile} />
        </div>

        <div className="p-2">
          <Categories mobile={mobile} />
        </div>

        <div className="flex-1 p-2 flex">
          <AppContent mobile={mobile} />
        </div>
      </div>
    </div>
  );
}

export default App;