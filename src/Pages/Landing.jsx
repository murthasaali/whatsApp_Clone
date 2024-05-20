import React from 'react'
import SideBar from '../components/SideBar'
import ChatContactsUI from '../components/ChatContactsUI'
import ChatingUI from '../components/ChatingUI'
import { useSelector } from 'react-redux'
import Communities from '../components/CommunityList'
import StatusList from '../components/StatusList'
import Settings from '../components/Settings'
import CallsLists from '../components/CallsLists'

function Landing() {
  const sidebarButtonContent=useSelector((state)=>state.chatui.sidebarButton)
  const theme=useSelector((state)=>state.chatui.theme)
  console.log(sidebarButtonContent)
  return (
    <div className={`w-full h-screen ${theme==="dark"&&"bg-white"} bg-black p-3 flex  justify-center items-center`}>
        {/* landing page ui contains 3 major sections */}
        <div className='w-full h-full flex justify-between relative md:ps-20 ps-0'>
        {/* 1: sidebar */}
            <SideBar/>
            <div className='w-[100%]   h-full flex gap-1 px-3  p-20 md:p-0'>
                <div className='md:w-[35%] w-full h-full bg-red-500 '>
                    {/*  first section */}
                    {
                      sidebarButtonContent==="chats"&&(<ChatContactsUI theme={theme}/>)||
                      sidebarButtonContent==="communities"&&(<Communities theme={theme}/>)||
                      sidebarButtonContent==="status"&&(<StatusList theme={theme}/>)||
                      sidebarButtonContent==="calls"&&(<CallsLists theme={theme}/>)||
                      sidebarButtonContent==="settings"&&(<Settings theme={theme}/>)    
                    }
                </div>
                <div className={`${theme==="dark"?"bg-stone-500 bg-opacity-30":"bg-stone-500 bg-opacity-15"} w-[65%] md:flex hidden rounded-xl h-full   `}>
                  <ChatingUI theme={theme}/>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Landing