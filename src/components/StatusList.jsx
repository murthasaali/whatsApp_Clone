import React, { useState } from 'react';
import { HiSpeakerWave } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { updateChatUiContent } from '../Redux/Features/ChatUiSlice';
import { FaUsers } from "react-icons/fa";
import statusListData from '../Datas/StatusClod';
import StatusModal from '../Modals/StatusModal';
import { timeAgo } from '../Functions/dateConvertor';

function StatusList({theme}) {
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
      <h1 className={`${theme==="dark"?"text-green-600 ":"text-white "} text-xl font-bold h-fit`}>Status</h1>
      </nav>
      <div className='flex w-full p-3 gap-6 text-white rounded-xl justify-start items-center'>
        <button className='bg-green-500 bg-opacity-80 text-3xl p-2 h-14 w-14 rounded-full'></button>
        <div className='w-fit flex flex-col gap-1 h-full justify-center items-start'>
          <div className={`${theme==="dark"?"text-black":"text-white "}`}>My Status</div>
          <div className='text-xs text-stone-400'>no update</div>
        </div>
      </div>

      <div className='text-white flex flex-col gap-3 overflow-y-auto'>
        {statusListData.map((item) => (
          <div
            key={item.id}
            onClick={() => handleStatusClick(item)}
            className={`w-full h-fit ${theme==="dark"?"bg-green-400 bg-opacity-40 text-black ":"bg-stone-50 bg-opacity-15 "} transition-all duration-500 ease-in-out px-2 py-2 rounded-xl flex gap-6 ${currentContent.name===item.name?"scale-105":""}`} 
            >
            <div className='w-14 h-14 p-[3px] bg-green-500 rounded-full'>
              <img src={item.profilePic} className='w-full h-full overflow-hidden rounded-full border-[3px] border-stone-700' />
            </div>
            <div className='w-fit h-full flex flex-col justify-center items-start gap-2'>
              <h1>{item.name}</h1>
              <h1 className='font-thin text-xs text-stone-400'>{timeAgo(item.statusImages[0].timestamp)}</h1>
            </div>
          </div>
        ))}
      </div>

      {selectedStatus && (
        <StatusModal status={selectedStatus} onClose={handleCloseModal}  />
      )}
    </div>
  );
}

export default StatusList;
