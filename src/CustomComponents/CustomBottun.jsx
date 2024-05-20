import React from 'react';
import { useSelector } from 'react-redux';
import Tooltip from './ToolTip';

function CustomButton({ icon, buttonHandle, content,round,position }) {
  const theme = useSelector((state) => state.chatui.theme);
  const sidebarButtonContent = useSelector((state) => state.chatui.sidebarButton);

  const buttonClass = `
    p-2 transition-all duration-300 rounded-full 
    ${theme === 'dark' 
      ? `bg-stone-400 bg-opacity-40 ${sidebarButtonContent === content ? 'text-green-600' : 'text-stone-900'}` 
      : `bg-stone-50 bg-opacity-15 ${sidebarButtonContent === content ? 'text-green-600' : 'text-stone-50'}`
    }
  `;

  return (
    <Tooltip text={content} round={round} position>
      <button
        onClick={() => buttonHandle(content)}
        className={buttonClass}
      >
        {icon}
      </button>
    </Tooltip>
  );
}

export default CustomButton;
