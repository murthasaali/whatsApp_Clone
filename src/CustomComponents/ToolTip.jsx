import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Tooltip = ({ text, children }) => {
    const theme=useSelector((state)=>state.chatui.theme)

  const [show, setShow] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className={` ${theme==="dark"?"text-white bg-stone-900":"text-black bg-gray-100"} absolute bottom-0 left-full mb-2 px-2 py-1 text-sm  z-50  shadow-lg rounded-full `}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
