import { useState } from "react";
import { HiOutlinePlus, HiOutlineHashtag, HiUserAdd } from "react-icons/hi";
import { HiMiniSpeakerWave } from "react-icons/hi2"
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";

const ChannelBar = () => {
  return (
    <div className="channel-bar">
      <div className="channel-container">
        <ChannelDropDown label="TEXT CHANNELS"></ChannelDropDown>
        <div className="flex justify-evenly w-full items-center p-1 hover:bg-gray-400 cursor-pointer rounded py-2">
          <HiOutlineHashtag className="mr-1 text-gray-500" size={20} />
          <h2 className="text-xs font-semibold text-gray-800">general</h2>
          <HiUserAdd className="ml-auto text-gray-500 mr-1 hover:text-gray-600" />
          <BsGearFill className="text-gray-500 hover:text-gray-600" size={12}/>
        </div>
        <ChannelDropDown label="VOICE CHANNELS"></ChannelDropDown>
        <div className="flex w-full items-center p-1 hover:bg-gray-400 cursor-pointer rounded py-2">
            <HiMiniSpeakerWave className="mr-1 text-gray-500" />
            <h2 className="text-gray-500 text-xs font-semibold">Comms</h2>
        </div>
      </div>
    </div>
  );
};

const ChannelDropDown = ({ label }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="dropdown" onClick={() => setExpanded(!expanded)}>
      <div className="dropdown-header">
        <Chevron expanded={expanded} />
        <h5 className="dropdown-label">{label}</h5>
        <HiOutlinePlus className="ml-auto" size={16} />
      </div>
    </div>
  );
};

const Chevron = ({ expanded }) => {
  const chevronClass = "mr-2";
  return expanded ? (
    <FaChevronRight size={8} className={chevronClass} />
  ) : (
    <FaChevronDown className={chevronClass} size={8} />
  );
};

export default ChannelBar;
