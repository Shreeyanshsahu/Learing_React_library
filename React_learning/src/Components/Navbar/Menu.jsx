import { Menu } from "lucide-react";
import "../../index.css";
function MenuComponent({ mobile }) {

    return (

        <button type="submit"
            className={` ${!mobile ? "hidden" : ''}  h-12 w-9 
           transition-colors ${mobile ? 'rounded-full' : ''} `}>
            <Menu size={22} className="text-white" />
        </button>
    );
}

export default MenuComponent;