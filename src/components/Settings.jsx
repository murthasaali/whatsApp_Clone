import React, { useState } from 'react';
import { HiSpeakerWave } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { updateChatUiContent } from '../Redux/Features/ChatUiSlice';
import { FaLock, FaSearch, FaUser} from "react-icons/fa";
import StatusModal from '../Modals/StatusModal';
import SettingButtons from '../CustomComponents/SettingButtons';
import { IoChatboxOutline } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { SiShortcut } from "react-icons/si";
import { RiLogoutCircleRFill } from "react-icons/ri";

import { IoIosHelpCircleOutline } from "react-icons/io";


function Settings() {
  const [selectedStatus, setSelectedStatus] = useState(null);

  const currentContent = useSelector((state) => state.chatui.chatUiContent);
  const dispatch = useDispatch();

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  const handleCloseModal = () => {
    setSelectedStatus(null);

  };

  return (
    <div className='w-full h-full bg-black px-4 flex flex-col gap-3'>
      <nav className='py-6 px-3 flex justify-between w-full items-end'>
        <h1 className='text-xl font-bold text-white h-fit'>Settings</h1>
      </nav>
      <div className='flex w-full p-3 gap-6 bg-stone-50 bg-opacity-15 rounded-xl justify-start items-center text-stone-300'>
        <FaSearch />
        <input className='w-full h-full bg-transparent outline-none' placeholder='search' />
      </div>
      <div className='flex w-full p-3 gap-6 text-white rounded-xl justify-start items-center'>
        <button className=' text-3xl h-14 w-14 rounded-full'>
            <img className='w-full h-full object-cover rounded-full' src="https://img.freepik.com/free-photo/model-wearing-beautiful-shade-clothing_23-2151428054.jpg?t=st=1716107279~exp=1716110879~hmac=c861acc9c6fb04c130bf720c20f665121b14eb0369c1d28cdb6209d8d25e30b0&w=360" alt="" />
        </button>
        <div className='w-fit flex flex-col gap-1 h-full justify-center items-start'>
          <div>Ayzzz 😍</div>
          <div className='text-xs text-stone-400'>إن شاء الله😌</div>
        </div>
      </div>

      <div className='text-white flex flex-col gap-1 overflow-y-auto'>
      <SettingButtons content={"Account"} icon={<FaUser/>}/>
      <SettingButtons content={"Praivacy"} icon={<FaLock/>}/>
      <SettingButtons content={"chats"} icon={<IoChatboxOutline/>}/>
      <SettingButtons content={"notifications"} icon={<IoNotifications/>}/>
      <SettingButtons content={"Keyboard shotcuts"} icon={<SiShortcut/>}/>
      <SettingButtons content={"help"} icon={<IoIosHelpCircleOutline/>}/>
      <SettingButtons content={"logout"} icon={<RiLogoutCircleRFill/>} color={"text-red-500"}/>
      </div>

      {selectedStatus && (
        <StatusModal status={selectedStatus} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Settings;
