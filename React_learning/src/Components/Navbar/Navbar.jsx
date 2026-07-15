import "../../index.css";

import Logo from "./Logo.jsx";
import Searchbar from "./Searchbar.jsx";
import Userinfo from "./Userinfo.jsx";
function Navbar() {
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
        flex flex-col
        md:flex-row
        md:items-center
        md:justify-between
        gap-4
      ">
      <Logo />
      <Searchbar />
      <Userinfo />
    </div>
  );
}

export default Navbar;
