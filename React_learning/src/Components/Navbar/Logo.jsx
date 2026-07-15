import { useState } from "react";
import "../../index.css";
import skillstreamlogo from "../../assets/cc9a8f8e-cf1a-4d28-935c-35307adf4289__1_-removebg-preview.png";

function Logo() {

  return (
      <div className="flex items-end">
        <img src={skillstreamlogo} className="h-12 w-12 object-contain" alt="SkillStream Logo" />
        <span className="font-bold  text-3xl font-lobster text-[#7682d7]">Kill</span>
        <span className="font-bold  text-3xl font-lobster text-[#7682d7]">Stream</span>
      </div>
  );
}
export default Logo;