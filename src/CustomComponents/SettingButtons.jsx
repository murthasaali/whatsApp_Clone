import React from 'react'
import { useSelector } from 'react-redux';

function SettingButtons({icon,content,color}) {
  const theme = useSelector((state) => state.chatui.theme);

  return (
    <button className='w-full h-fit py-4 px-4 flex justify-start gap-6 items-center hover:bg-stone-50 hover:bg-opacity-10'>
        <div className={`text-xl font-thin ${theme==="dark"?`${color?color:"text-black"}`:`${color?color:"text-white"}`} `}>{icon}</div>
        <div className={`text-xl font-thin ${theme==="dark"?`${color?color:"text-black"}`:`${color?color:"text-white"}`} `}>{content}</div>
        </button>
  )
}

export default SettingButtons