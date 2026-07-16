import Navbar from "./Components/Navbar/Navbar.jsx";
import { useState, useEffect } from "react";
import Categories from "./Components/Categories/Categories.jsx";
import AppContent from "./Components/AppContent/Appcontent.jsx";
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
    <div style={{
      backgroundImage: `url(/Bkglib.jpg)`,
    }} className="h-screen
    w-full
    bg-cover
    bg-center
    bg-no-repeat
    bg-fixed
    relative
    flex
    flex-col
    z-10
    overflow-y-auto
    no-scrollbar
    ">
      <div className="fixed  inset-0 backdrop-blur-sm bg-black/30"></div>
      <div className="p-2 relative z-10">
        <Navbar mobile={mobile} />
      </div>
      <div className="p-2 relative z-10">
        <Categories mobile={mobile} />
      </div>
      <div className="p-2 flex-1 flex relative z-10">
        <AppContent mobile={mobile} />
      </div>
    </div>
  );
}

export default App;