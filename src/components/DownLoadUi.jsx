import React from 'react';

function DownLoadUi() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6">
      <div className='w-fit h-fit'>
        <img 
          src="https://www.gupshup.io/resources/wp-content/uploads/2022/12/Blog-Img_1.jpg" 
          className='w-32 h-auto rounded-full border-green-300 border-[3px]' 
          alt="Gupshup" 
        />
      </div>
      <h1 className='text-3xl font-thin'>Download WhatsApp for Windows</h1>
      <p className='text-sm font-thin w-[50%] text-center'>
        Make calls, share your screen, and get a faster experience when you download the Windows app
      </p>
      <a 
        href="https://www.microsoft.com/store/apps/9NKSQGP7F2NH" 
        target="_blank"
        rel="noopener noreferrer"
        className='p-3 bg-green-500 text-white rounded-full'
      >
        Get from Microsoft
      </a>
    </div>
  );
}

export default DownLoadUi;
