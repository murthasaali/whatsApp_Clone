import React, { useState } from 'react';
import { HiSpeakerWave } from "react-icons/hi2";

import { useDispatch, useSelector } from 'react-redux';
import { updateChatUiContent } from '../Redux/Features/ChatUiSlice';
import { FaUsers } from "react-icons/fa";
import communityData from '../Datas/CommunityDatas';

function Communities({theme}) {
  const currentContent=useSelector((state)=>state.chatui.chatUiContent)
  const dispatch = useDispatch()
  return (
    <div className={`${theme==="dark"?"bg-white text-stone-900":"bg-black text-stone-300"} w-full h-full  px-4 flex flex-col gap-3`}>
      <nav className='py-6 px-3 flex justify-between w-full items-end'>
      <h1 className={`${theme==="dark"?"text-green-600 ":"text-white "} text-xl font-bold h-fit`}>Communities</h1>
        
      </nav>
      <div className='flex w-full p-3 gap-6 bg-stone-50 bg-opacity-15 rounded-xl justify-start items-center text-stone-300'>
        <button  className='bg-green-500 bg-opacity-80 text-3xl p-2 rounded-xl'><FaUsers/></button>
        <div className='text-stone-600'>create new community</div>
      </div>
     
      <div className='text-white flex flex-col gap-3 hide-scrollbar overflow-y-auto'>
        {communityData.map((item) => (
            <>
          <div key={item.id} className={`w-full h-fit ${theme==="dark"?" bg-green-400 bg-opacity-40 text-black":"bg-stone-50 text-white bg-opacity-15"}  flex flex-col transition-all duration-500 ease-in-out px-2 py-2 rounded-xl   gap-2 ${currentContent.name===item.name?"scale-105":""}`} onClick={()=>dispatch(updateChatUiContent(item))}>
            <div className='w-full  h-fit flex justify-center items-center gap-3'>
            <img
              src={item.profileImage ?  'https://img.freepik.com/free-photo/positive-young-caucasian-male-with-pleasant-friendly-smile-shows-white-teeth-rejoices-new-stage-life-wears-casual-striped-sweater-round-spectacles-stands-alone-against-pink-wall_273609-14966.jpg?t=st=1715860507~exp=1715864107~hmac=09801c5fdde9d9ec1355cad128d52673512db016437ed27120271e9a4a9784af&w=1060':item.profileImage}
              alt={item.name}
              className='w-12 h-12 rounded-xl object-cover border-[3px] border-green-500 '
              />
            <div className='w-full justify-between flex items-center  h-full'>
              <div className='flex flex-col justify-center h-full'>
                <h1 className='text-xl'>{item.communityName}</h1>
                <h4 className='text-xs text-blue-200'>{item.message}</h4>
              </div>
             
            </div>
            </div>
            <div className='w-full py-3  flex justify-between items-center hover:bg-stone-600 hover:bg-opacity-45 px-2 gap-3 border-[2px] border-opacity-40 border-stone-500 border-x-0'>

            <button  className='bg-green-500 bg-opacity-40 text-2xl p-2 rounded-xl'><HiSpeakerWave/></button>
            <div className='w-full h-full flex justify-between '>
                <div className='w-fit flex justify-center items-start gap-1 flex-col'>
                    <h1>Announcements</h1>
                    <div className='text-xs text-stone-400  font-thin'>{item.lastAnnouncement}</div>
                </div>
            </div>
                <div className=' w-16  flex justify-center items-end gap-1 flex-col'>
                    <h1 className='text-xs w-fit'>{item.timestamp}</h1>
                    <div className='text-xs p-1 rounded-full bg-green-400  font-thin'></div>
                </div>


            </div>

          </div>
              </>
        ))}
      </div>
    </div>
  );
}

export default Communities;
