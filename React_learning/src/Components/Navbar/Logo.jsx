import { useState } from "react";
import "../../index.css";
import skillstreamlogo from "../../assets/cc9a8f8e-cf1a-4d28-935c-35307adf4289__1_-removebg-preview.png";

function Logo({ mobile }) {

  return (
      <div className="flex items-end">
        <img src={skillstreamlogo} className={` object-contain ${mobile ? 'h-9 w-9' : 'md:h-12 md:w-12'}`} alt="SkillStream Logo" />
        <span className={`font-bold  ${mobile ? 'text-2xl' : 'text-3xl'} font-lobster text-[#7682d7]`}>Kill</span>
        <span className={`font-bold  ${mobile ? 'text-2xl' : 'text-3xl'} font-lobster text-[#7682d7]`}>Stream</span>
      </div>
  );
}
export default Logo;