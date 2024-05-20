import React from 'react'
import { BiMessageSquareDetail, BiPhone } from "react-icons/bi";
import { FaPhone, FaUsers } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { PiMessengerLogoFill } from "react-icons/pi";
import { useSelector,useDispatch } from 'react-redux';
import { updateSidebarButton, updateTheme } from '../Redux/Features/ChatUiSlice';
import CustomBottun from '../CustomComponents/CustomBottun';
import { IoSettingsOutline } from "react-icons/io5";

function SideBar() {
  const dispatch=useDispatch()
  const theme=useSelector((state)=>state.chatui.theme)

  const handleButtonClick = (content) => {
    dispatch(updateSidebarButton(content));
  };

  return (
    <div className={`absolute  top-0 md:h-full h-fit md:w-20 w-full left-0 ${theme==="dark"?"bg-stone-400 bg-opacity-40 ":"bg-stone-50 bg-opacity-15 "}  rounded-xl   flex flex-row md:flex-col justify-between items-center md:p-2 p-1`}>
<div className='w-full h-fit flex md:flex-col flex-row gap-3 text-3xl items-center text-stone-100'>
<CustomBottun buttonHandle={handleButtonClick} content={"chats"} icon={<BiMessageSquareDetail />} />
<CustomBottun buttonHandle={handleButtonClick} content={"communities"} icon={<FaUsers />} />
<CustomBottun buttonHandle={handleButtonClick} content={"status"} icon={<AiFillFire />} />
<CustomBottun buttonHandle={handleButtonClick} content={"calls"} icon={<BiPhone />} />
</div>
<div className='w-full h-fit flex md:flex-col flex-row gap-3 text-3xl  md:py-4 py-1 items-center text-stone-100'>
<button className={`${theme==="dark"?"bg-black  transition-all duration-300 justify-start":"bg-green-500 justify-end"} md:w-[80%] w-14 h-6 rounded-full flex justify-start p-[2px]`} onClick={()=>dispatch(updateTheme(theme==="dark"?"light":"dark"))}> <div className='w-6 h-full bg-white border-[2px] border-stone-500 rounded-full' ></div></button>
<CustomBottun buttonHandle={handleButtonClick} content={"settings"} icon={<IoSettingsOutline />} />
  
    <button className=' hover:bg-stone-50 hover:bg-opacity-15 rounded-full  '>
    <img src='https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?t=st=1715862020~exp=1715865620~hmac=1e387dd241d30fc62fbaabf1b631ec999184e966becabac1c6a2ca9d6866d615&w=1060' className='h-12 w-12 object-cover rounded-full '/>
    </button>
    
</div>
    </div>
  )
}

export default SideBar