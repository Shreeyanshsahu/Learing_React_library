import "../../index.css";
import SubscribedChannel from "./SubscribedChannel";
import SidebarButton from "./SIdebarbuttons";
import { HeartPlus } from "lucide-react";
import { History } from "lucide-react";
import { Bookmark } from "lucide-react";
function Sidebar({ mobile }) {

    return (
        <div className={`flex gap-2 
         backdrop-blur-md 
         backdrop:brightness-75 justify-start
         align-start
         rounded-xl border
          border-white/20
          shadow-lg shadow-black/20 
          flex-col
          ${mobile ? 'w-full hidden' : 'w-2/9'}
          `}>
            <div className="  flex
    flex-col
    w-full
    max-h-80
    overflow-y-auto
    no-scrollbar
    p-2
    rounded-xl
    border
    border-white/20
            ">

                <div className="font-bold text-xl p-2 text-white uppercase">Subscribed Channels</div>
                <SubscribedChannel mobile={mobile} sidebar={true} />
            </div>
            <div className="flex items-center gap-2 
            backdrop-blur-md 
            backdrop:brightness-75 
            rounded-xl border
             border-white/20
            shadow-lg shadow-black/20
            flex-col w-full
            h-2/6
            flex-1
            p-2
            ">
                <SidebarButton id={1} ButtonName="Liked Videos" buttonsvg={<HeartPlus size={20} />} sidebar={true} />
                <SidebarButton id={2} ButtonName="Watch History" buttonsvg={<History size={20} />} sidebar={true} />
                <SidebarButton id={3} ButtonName="Saved Courses" buttonsvg={<Bookmark size={20} />} sidebar={true} />
            </div>
        </div>
    )
}

export default Sidebar;

