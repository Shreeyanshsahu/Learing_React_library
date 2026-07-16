import "../../index.css";
import { useState } from "react";
import Logo from "./Logo.jsx";
import Searchbar from "./Searchbar.jsx";
import Userinfo from "./Userinfo.jsx";
function Navbar({ mobile }) {
  const [isMobile, setIsMobile] = useState(mobile);
  return (
    <div
      className="navbar
        w-full
        p-4
        bg-white/10
        backdrop-blur-lg
        border border-white/20
        shadow-lg
        rounded-3xl
        justify-between
        flex 
        md:items-center
        md:justify-between
        gap-4
      ">
      <Logo mobile={mobile} />
      <Searchbar mobile={mobile} />
      <Userinfo mobile={mobile} />

    </div>
  );
}

export default Navbar;
