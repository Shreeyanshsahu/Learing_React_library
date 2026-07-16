import "../../index.css";
import SubscribedChannel from "./SubscribedChannel";
import SidebarButton from "./SIdebarbuttons";
import { HeartPlus } from "lucide-react";
import { History } from "lucide-react";
import { Bookmark } from "lucide-react";
function Sidebar({ mobile }) {
    const subscribedChannels = [
  {
    id: 1,
    name: "CodeCraft",
    username: "codecraft",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Backend Hub",
    username: "backendhub",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Algo Master",
    username: "algomaster",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "React Nation",
    username: "reactnation",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "AI Labs",
    username: "ailabs",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "Full Stack Pro",
    username: "fullstackpro",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: 7,
    name: "Tech Explained",
    username: "techexplained",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 8,
    name: "JavaScript Daily",
    username: "javascriptdaily",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 9,
    name: "Python Academy",
    username: "pythonacademy",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 10,
    name: "Cloud Guru",
    username: "cloudguru",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 11,
    name: "Cyber Vault",
    username: "cybervault",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 12,
    name: "Dev Diaries",
    username: "devdiaries",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];
    return (
        <div className={`flex gap-2 
         backdrop-blur-md 
         backdrop:brightness-75 justify-start
         align-start
         rounded-xl border
          border-white/20
          shadow-lg shadow-black/20 
          flex-col
          ${mobile ? 'w-full hidden' : 'w-68'}
          `}>
            <div className="  flex flex-col w-full  max-h-80
              overflow-y-auto no-scrollbar p-2 rounded-xl border border-white/20
            ">

                <div className="font-bold text-xl p-2 text-white uppercase">Subscribed Channels</div>
                <SubscribedChannel mobile={mobile} sidebar={true} subscribedChannels={subscribedChannels} />
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
