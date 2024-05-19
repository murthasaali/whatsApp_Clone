import React from 'react'
import { GrEmoji } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { HiOutlinePlus } from "react-icons/hi2";

function ChatInput() {
  return (
    <div className='w-full h-[80px]  text-3xl  flex gap-2 py-3 justify-between items-center px-4   bottom-0'>

        <button className=' px-2  h-fit '>
            <GrEmoji/>
        </button>
        <button className='  px-2 rounded-full hover:bg-stone-500 hover:bg-opacity-20 py-2 hover:rotate-90 transition-all duration-300 h-fit '>
            <HiOutlinePlus/>
        </button>
        <div className='p-2 w-full bg-stone-50 bg-opacity-5 rounded-lg h-fit '>
           <input type="text " className=' w-full bg-transparent outline-none text-xl font-thin' /> 
        </div>
        <button className='p-2 px-4  h-fit hover:scale-90 hover:text-stone-500 transition-all duration-300'>
            <IoSend/>
        </button>

    </div>
  )
}

export default ChatInput