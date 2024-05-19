import React,{useState} from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { timeAgo } from '../Functions/dateConvertor';
import { CiPause1 } from "react-icons/ci";
import { HiSpeakerWave } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import ChatInput from '../components/ChatInput';
import { useSelector } from 'react-redux';


const StatusModal = ({ status, onClose }) => {
  const theme=useSelector((state)=>state.chatui.theme)

    const [statusCount,setStatusCount]=useState(0)
    const customCount = (count) => {
        setStatusCount(count);
    };
    
    
      const incrementStatusCount = () => {
        statusCount<status.statusImages.length-1&&
        setStatusCount(statusCount + 1);
        console.log(statusCount)
      };
      const progressBar = Array.from({ length: status.statusImages.length }, (_, index) => (
        <button key={index} onClick={()=>customCount(index)} className={`w-full p-[4px] bg-green-400 rounded-full ${index <= statusCount ? 'bg-opacity-80' : 'bg-opacity-50'}`}></button>
    ));
    setTimeout(() => {
        incrementStatusCount()
    }, 2000);
  return (
    <div className=' inset-0 bg-black bg-opacity-90 flex items-center flex-col justify-start py-7 gap-10 z-50 fixed'>
         <button onClick={onClose} className='text-xl absolute text-white top-10 right-10 bg-stone-50 bg-opacity-10  rounded-full hover:rotate-90 transition-all duration-300'>
            <AiOutlineClose />
          </button>
          <div className='w-[40%] p-1  flex gap-1'>

{progressBar}            
          </div>
        <div className='w-[40%] h-fit p-3  flex justify-between gap-5 px-3'>
        <div className='w-14 h-14 p-[3px] bg-green-500 rounded-full'>
              <img src={status.profilePic} className='w-full h-full overflow-hidden rounded-full border-[3px] border-stone-700' />
            </div>
            <div className='w-[50%] h-full  text-green-400 flex flex-col justify-start items-start gap-2'>
              <h1>{status.name}</h1>
              <h1 className='font-thin text-xs text-stone-400'>{timeAgo(status.statusImages[statusCount].timestamp)}</h1>
            </div>
            <div className='w-fit h-full flex text-2xl text-white justify-center items-center gap-3'>
               <button className='px-2' ><CiPause1/></button>
               <button className='px-2'><HiSpeakerWave/></button>
               <button className='px-2'><BsThreeDotsVertical/></button>
            </div>
        </div>
      <div className='bg-gray-900 bg-opacity-90 p-4 rounded-xl w-[50%] py-4 px-2 max-w-lg '>
        <div className='flex justify-center w-full h-96 transition-all duration-300 items-center flex-col gap-3'>
            <img src={status.statusImages[statusCount].url} alt="hwllo" />
            
         
        </div>
       
      </div>
      
      <div className='w-[80%] p-2 text-3xl text-white flex justify-center'>
      {/* <button onClick={decrementStatusCount}>&lt;</button> */}
        <div className='w-[60%]'>
          <ChatInput />
        </div>
        {/* <button onClick={incrementStatusCount}>&gt;</button> */}
            </div>
    </div>
  );
};

export default StatusModal;
