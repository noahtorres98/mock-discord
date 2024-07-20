import React from "react";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaDiscord, FaPoo } from "react-icons/fa";
import { IoMdCompass } from "react-icons/io";

const SideBar = () => {
  return (
    <div className="w-16 p-2 bg-gray-300 dark:bg-gray-900 text-white">
      <SideBarIcon
        className="hover:bg-indigo-500"
        icon={<FaDiscord size="28" />}
        text={"Direct Messages"}
      />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
      <SideBarIcon icon={<BsPlus size="32" />} text={"Add a Server"} />
      <SideBarIcon
        icon={<IoMdCompass size="22" />}
        text={"Explore Discoverable Servers"}
      />
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
