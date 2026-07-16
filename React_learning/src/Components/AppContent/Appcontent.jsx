import "../../index.css";
import Sidebar from "./Sidebar";
import Videosec from "./Videosec";
function AppContent({ mobile }) {

  return (
    <div className={`flex flex-1
                items-start  gap-3 
         py-2  ${mobile ? 'pr-1 pl-1' : 'pr-3 pl-3'}
          shadow-lg shadow-black/20
          w-full
          `}>
      <Sidebar mobile={mobile} />
      <Videosec mobile={mobile} />
    </div>
  )

}
export default AppContent;
