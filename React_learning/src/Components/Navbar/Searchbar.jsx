import "../../index.css";
import { Search } from "lucide-react";
function Searchbar({ mobile }) {
    return (
        <div className={`flex items-center justify-center `}>
            <input
                type="text"
                placeholder="Search"
                className={`flex-1 bg-transparent backdrop-blur-2xl p-4 text-white placeholder-gray-400
           outline-none rounded-l-3xl border-[#ffffff] border-r-0 border-[1.5px] font-semibold ${mobile ? 'hidden h-9' : 'h-12'} `}
            />
            <button type="submit"
                className={` ${mobile ? 'p-1 h-9 w-9' : 'p-2 h-12 w-12'} bg-white/10 hover:bg-white/20 
           transition-colors flex items-center justify-center rounded-r-full border-[#ffffff] border-[1.5px] ${mobile ? 'rounded-full h-2.5' : ''} `}>
               <Search size={mobile ? 12 : 19} className="text-white" />
            </button>
        </div>
    );
}

export default Searchbar;