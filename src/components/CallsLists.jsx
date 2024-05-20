import React, { useState } from 'react';
import { HiOutlineFolderPlus, HiSpeakerWave } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { updateChatUiContent } from '../Redux/Features/ChatUiSlice';
import { FaUsers } from "react-icons/fa";
import statusListData from '../Datas/StatusClod';
import StatusModal from '../Modals/StatusModal';
import { timeAgo } from '../Functions/dateConvertor';
import { PiDotsThreeOutlineVerticalFill, PiPhonePlus } from 'react-icons/pi';
import { BiLink, BiPhoneIncoming } from 'react-icons/bi';

function CallsLists({theme}) {
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
    <div className={`${theme==="dark"?"bg-white text-stone-900 ":"bg-black text-stone-300"} w-full h-full  px-4 flex flex-col gap-3`}>
      <nav className='py-6 px-3 flex justify-between w-full items-end'>
      <h1 className={`${theme==="dark"?"text-green-600 ":"text-white "} text-xl font-bold h-fit`}>Calls
      </h1>
      <div className='flex gap-3 text-stone-600 text-xl justify-center items-center'>
          <PiPhonePlus />
        </div>
      </nav>
      <div className='flex w-full p-3 gap-6 text-white rounded-xl justify-start items-start'>
        <button className='bg-green-400 text-stone-400  flex justify-center items-center bg-opacity-40 text-3xl p-2 h-14 w-14 rounded-full'>
            <BiLink/>
        </button>
        <div className='w-fit flex flex-col gap-1 h-full justify-center items-start'>
          <div className={`${theme==="dark"?"text-black":"text-white "}`}>create call link</div>
          <div className='text-xs text-stone-400'>share link for your Whatsapp calls</div>
        </div>
      </div>

      <div className='text-white flex flex-col gap-3 overflow-y-auto'>
        {statusListData.map((item) => (
          <div
            key={item.id}
            onClick={() => handleStatusClick(item)}
            className={`w-full h-fit ${theme==="dark"?"bg-green-400 bg-opacity-20 text-black ":"bg-stone-50 bg-opacity-15 "} transition-all duration-500 ease-in-out px-2 py-2 rounded-xl flex justify-between gap-6 ${currentContent.name===item.name?"scale-105":""}`} 
            >
           <div className='flex gap-3'>
           <div className='w-14 h-14 p-[3px] bg-green-500 rounded-full'>
              <img src={item.profilePic} className='w-full h-full overflow-hidden rounded-full border-[3px] border-stone-700' />
            </div>
            <div className='w-fit h-full flex flex-col justify-center items-start gap-2'>
              <h1>{item.name}</h1>
              <h1 className='font-thin text-[15px] text-red-500 flex justify-center items-center gap-2'><BiPhoneIncoming/><span className='text-red-500'>Missed</span></h1>
            </div>
           </div>
            <div className='w-fit h-full flex justify-center text-xs text-stone-500 items-center'>yesterday</div>
          </div>
        ))}
      </div>

      {selectedStatus && (
        <StatusModal status={selectedStatus} onClose={handleCloseModal}  />
      )}
    </div>
  );
}

export default CallsLists;
