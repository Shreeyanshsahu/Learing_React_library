import "../../index.css";
import { Search } from "lucide-react";
function Searchbar() {
    return (
        <div className="flex items-center justify-center md:w-200 max-md:w-full">
            <input
                type="text"
                placeholder="Search"
                class="flex-1 h-12  bg-transparent backdrop-blur-2xl p-4 text-white placeholder-gray-400
           outline-none rounded-l-3xl border-[#ffffff] border-r-0 border-[1.5px] font-semibold"
            />
            <button type="submit"
                class=" p-4 h-12 bg-white/10 hover:bg-white/20 
           transition-colors flex items-center justify-center rounded-r-full border-[#ffffff] border-[1.5px]">
               <Search size={19} className="text-white" />
            </button>
        </div>
    );
}

export default Searchbar;