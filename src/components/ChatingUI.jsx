import React, { useState } from "react";
import ChatInput from "./ChatInput";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { FaLock, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { IoVideocamOutline } from "react-icons/io5";
import { RiCheckDoubleFill } from "react-icons/ri";
import { FaDownload } from "react-icons/fa6";
import CustomButton from "../CustomComponents/CustomBottun";

function ChatingUI({theme}) {
  const currentContent = useSelector((state) => state.chatui.chatUiContent);
  const chatHistory = currentContent.chatHistory;
  const [downloading, setDownloading] = useState({});
  const backgroundImage =
  theme === 'dark'
    ?
    "url('https://img.freepik.com/free-vector/gray-line-drawings-organic-shapes-background_1409-3947.jpg?t=st=1716117378~exp=1716120978~hmac=a85333593a6ff3ff6040f28a8c6d2652910d139f0a014aa72689db41fc774f51&w=1060')"
    :
    "url('https://ajcanjusao.cloudimg.io/v7/https://blog.1a23.com/wp-content/uploads/sites/2/2020/02/Desktop.png')"


  const handleDownloadClick = (index) => {
    setDownloading((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setDownloading((prev) => ({ ...prev, [index]: false }));
    }, 2000); 
  };

  return (
    <div className={` ${theme==="dark"?"text-black ":"text-white"} w-full h-full flex flex-col justify-start items-center`}>
      <nav className="w-full h-[100px] md:p-4 p-1 flex justify-between items-center">
        <div className="flex gap-3 justify-center font-bold items-center">
          <img
            src={currentContent.profilePic}
            alt={"hello"}
            className="w-14 h-14 rounded-full object-cover  border-green-400 border-[3px]"
          />
          <div>{currentContent.name}</div>
        </div>
        <div className="flex gap-6 justify-center items-center">
          
          <div className="px-2 py-2 rounded-full flex justify-center items-center  h-fit hover:w-56 w-24 border gap-2   transition-all duration-500">
            <FaSearch />
            <input type="text" className='w-full bg-transparent outline-none' placeholder="search"/>
            
          </div>
          <button className="w-fit px-3 py-1 border rounded-full text-2xl">
            <IoVideocamOutline />
          </button>
          
          <CustomButton content={"drop"}  icon={<button className="px-2 py-2 rounded-full h-fit bg-slate-200 bg-opacity-15">
            <PiDotsThreeOutlineVerticalFill />
          </button>}/>
        </div>
      </nav>
      <div
        className="w-full h-full hide-scrollbar overflow-y-scroll"
        style={{
          backgroundImage: backgroundImage,

          backgroundSize: "cover",
        }}
      >
        <div className={`${theme==="dark"?"bg-stone-50 bg-opacity-10":"bg-stone-950 bg-opacity-75"} w-full h-fit flex flex-col  gap-4 min-h-full p-3`}>
          <div className="w-full h-fit flex justify-center">
            <div className="w-fit p-1 px-2 bg-stone-50 bg-opacity-10 text-stone-400 rounded-sm">
              <p className="text-[10px] font-thin flex justify-center items-center gap-2">
                <FaLock />
                Messages and Calls are end-to-end encrypted. No one outside of
                this chat, not even WhatsApp, can read or listen to them. Select
                to learn more
              </p>
            </div>
          </div>

          {chatHistory.map((item, index) => (
            <div
              className={`w-full flex h-fit ${
                item.sender === "Me" ? "justify-end" : "justify-start"
              }`}
              key={index}
            >
              {item.image ? (
                <div
                  className={`${theme==="dark"?"bg-green-400 bg-opacity-60 ":"bg-green-400 bg-opacity-20"} text-sm h-fit flex justify-start items-start p-3 min-w-[100px] min-h-fit max-w-[300px] rounded-xl gap-2 flex-col ${
                    item.sender === "Me"
                      ? "rounded-tr-none"
                      : "rounded-tl-none"
                  }`}
                >
                  <div className="backdrop-blur-md relative overflow-hidden rounded-xl">
                    {downloading[index] ? (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg
                          aria-hidden="true"
                          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      </div>
                    ) : (
                      <button
                        className="absolute top-1/2 left-1/2 text-xs transform -translate-x-1/2 -translate-y-1/2 font-thin rounded-full w-fit bg-stone-900 bg-opacity-70 px-6 py-3 z-50 flex flex-col gap-1 justify-center items-center"
                        onClick={() => handleDownloadClick(index)}
                      >
                        <div>
                          <FaDownload className="text-lg" />
                        </div>
                      </button>
                    )}
                    <img
                      src={item.image}
                      alt=""
                      className={`w-auto rounded-xl filter ${
                        downloading[index] ? "blur-md" : ""
                      }`}
                    />
                  </div>

                  <p className="text-xs text-stone-400">{item.caption}</p>
                </div>
              ) : (
                <div
                  className={`${theme==="dark"?"bg-green-400 bg-opacity-60 ":"bg-green-400 bg-opacity-20"} relative text-sm pb-6 flex justify-start items-start px-3 pt-2 min-w-[100px] rounded-2xl ${
                    item.sender === "Me" ? "rounded-tr-none" : "rounded-tl-none"
                  }`}
                >
                  {item.message}
                  <div
                    className={`absolute bottom-0 right-5 text-[10px] text-stone-400 flex justify-center items-center gap-2`}
                  >
                    {item.timestamp}{" "}
                    {item.sender === "Me" && (
                      <RiCheckDoubleFill className="text-blue-800 text-lg" />
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <ChatInput theme={theme} />
    </div>
  );
}

export default ChatingUI;
