import "../../index.css";
import Logo from "./Logo.jsx";
import Searchbar from "./Searchbar.jsx";
import Userinfo from "./Userinfo.jsx";
import MenuComponent from "./Menu.jsx";
function Navbar({ mobile }) {
  return (
    <div
      className="navbar
        w-full
        px-4
        py-3
        bg-white/10
        backdrop-blur-lg
        border border-white/20
        shadow-lg
        rounded-3xl
        justify-around
        flex 
        md:items-center
        md:justify-between
      ">
      <MenuComponent mobile={mobile} />
      <Logo mobile={mobile} />
      <Searchbar mobile={mobile} />
      <Userinfo mobile={mobile} />

    </div>
  );
}

export default Navbar;
