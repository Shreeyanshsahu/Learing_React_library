import "../../index.css";
import Userinfo from "../Navbar/Userinfo";
function SubscribedChannel({ mobile,sidebar }) {

    return (
        <div className={`flex
         items-center gap-3 
         backdrop-blur-md 
         backdrop:brightness-75 
         py-2  ${mobile ? 'pr-1 pl-1 hidden w-full' : 'pr-3 pl-3 w-1/5'}
         rounded-xl 
          h-3/5
          flex-col
          overflow-y-auto
          no-scrollbar
          w-full
          flex-1
          `}>
            <Userinfo mobile={mobile} sidebar={sidebar} />
            <Userinfo mobile={mobile} sidebar={sidebar} />
            <Userinfo mobile={mobile} sidebar={sidebar} />
            <Userinfo mobile={mobile} sidebar={sidebar} />
            <Userinfo mobile={mobile} sidebar={sidebar} />
            <Userinfo mobile={mobile} sidebar={sidebar} />
            <Userinfo mobile={mobile} sidebar={sidebar} />
        </div>
    )
}

export default SubscribedChannel;

