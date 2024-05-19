import React, { useState } from 'react';
import { HiOutlineFolderPlus } from "react-icons/hi2";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import dummyData from '../Datas/dummyChatLists';
import { FaMeta } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { updateChatUiContent } from '../Redux/Features/ChatUiSlice';

function ChatContactsUI({theme}) {
  const currentContent=useSelector((state)=>state.chatui.chatUiContent)
  
  const dispatch = useDispatch()
  return (
    <div className={`${theme==="dark"?"bg-white text-stone-900":"bg-black text-stone-300"} w-full h-full  px-4 flex flex-col gap-3`}>
      <nav className='py-6 px-3 flex justify-between w-full items-end'>
        <h1 className={`${theme==="dark"?"text-green-600 ":"text-white "} text-xl font-bold h-fit`}>Chats</h1>
        <div className='flex gap-3 text-stone-500 text-xl justify-center items-center'>
          <img src='https://static.whatsapp.net/rsrc.php/v3/ye/r/W2MDyeo0zkf.png' className='h-5 w-5' />
          <HiOutlineFolderPlus />
          <PiDotsThreeOutlineVerticalFill />
        </div>
      </nav>
      <div className={`flex w-full p-3 gap-6 ${theme==="dark"?"bg-stone-400 bg-opacity-40 ":"bg-stone-50 bg-opacity-15 "} rounded-xl justify-start items-center`}>
        <FaSearch />
        <input className='w-full h-full bg-transparent outline-none' placeholder='search' />
      </div>
      <div className='flex gap-3 '>
        <button className='px-4 py-1 h-fit hover:bg-green-300 hover:bg-opacity-40 rounded-full bg-stone-300 bg-opacity-15'>all</button>
        <button className='px-4 py-1 h-fit hover:bg-green-300 hover:bg-opacity-40 rounded-full bg-stone-300 bg-opacity-15'>unread</button>
        <button className='px-4 py-1 h-fit hover:bg-green-300 hover:bg-opacity-40 rounded-full bg-stone-300 bg-opacity-15'>groups</button>
      </div>
      <div className=' flex flex-col gap-3'>
        {dummyData.map((item) => (
          <div key={item.id} 
          className={`w-full h-fit ${theme==="dark"?"bg-green-400 bg-opacity-40 ":"bg-stone-50 bg-opacity-15 "} transition-all duration-500 ease-in-out px-2 py-2 rounded-xl flex gap-6 ${currentContent.name===item.name?"scale-105":""}`} 
          onClick={()=>dispatch(updateChatUiContent(item))}>
            <img
              src={item.profilePic ? item.profilePic : 'https://img.freepik.com/free-photo/positive-young-caucasian-male-with-pleasant-friendly-smile-shows-white-teeth-rejoices-new-stage-life-wears-casual-striped-sweater-round-spectacles-stands-alone-against-pink-wall_273609-14966.jpg?t=st=1715860507~exp=1715864107~hmac=09801c5fdde9d9ec1355cad128d52673512db016437ed27120271e9a4a9784af&w=1060'}
              alt={item.name}
              className='w-14 h-14 rounded-full object-cover border-[3px] border-green-500 '
            />
            <div className='w-full justify-between flex items-center h-full'>
              <div className='flex flex-col justify-end h-full'>
                <h1 className='text-xl'>{item.name}</h1>
                <h4 className={`text-xs   ${theme==="dark"?"text-blue-500":"text-blue-200"}`}>{item.chatHistory[0].message}</h4>
              </div>
              <div className='flex flex-col justify-end items-end h-full p-1'>
                <h1 className='text-xs text-green-400'>{item.timestamp}</h1>
                <div className='text-xs px-2 py-1 bg-green-400 text-black rounded-full'>{item.unreadCount?item.unreadCount:"1"}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatContactsUI;
