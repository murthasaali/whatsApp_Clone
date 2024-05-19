import React from 'react'

function SettingButtons({icon,content,color}) {
  return (
    <button className='w-full h-fit py-4 px-4 flex justify-start gap-6 items-center hover:bg-stone-50 hover:bg-opacity-10'>
        <div className='text-lg'>{icon}</div>
        <div className={`text-xl font-thin ${color&&color} `}>{content}</div>
        </button>
  )
}

export default SettingButtons