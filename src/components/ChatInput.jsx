import React from 'react'
import { GrDocument, GrEmoji } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { HiOutlinePlus } from "react-icons/hi2";
import CustomButton from '../CustomComponents/CustomBottun';
import { FaCamera, FaPoll, FaUser } from 'react-icons/fa';
import { FaPencil, FaPhotoFilm } from 'react-icons/fa6';

function ChatInput({theme}) {
  return (
    <div className='w-full h-[80px]  text-2xl  flex gap-2 py-3 justify-between items-center px-4   bottom-0'>

        <button className=' px-2  h-fit '>
            <GrEmoji/>
        </button>
       <CustomButton round={"lg"} buttonHandle={()=>console.log("buttton")} content={<div className='text-green-500 flex  h-10 w-ft px-2 justify-between gap-4 text-xl items-center'>

        <FaCamera/>
        <FaUser/>
        <FaPoll/>
        <FaPencil/>
        <FaPhotoFilm/>
        <GrDocument/>

       </div>} icon={ <div className='   rounded-full   hover:rotate-90 transition-all duration-300 h-fit '>
            <HiOutlinePlus/>
        </div>}/>
        <div className={`${theme=="dark"?"bg-stone-50 bg-opacity-50 ":"bg-stone-900 bg-opacity-50 "} px-2 w-full rounded-lg h-fit   `}>
           <input type="text " className=' w-full h-10 bg-transparent outline-none text-sm font-thin placeholder:text-bluse-500'  placeHolder="text message..."/> 
        </div>
        <button className='p-2 px-4  h-fit hover:scale-90 hover:text-stone-500 transition-all duration-300'>
            <IoSend/>
        </button>

    </div>
  )
}

export default ChatInput