import React, { useState } from 'react'
import { FaUnlock } from 'react-icons/fa'

function LockUi({ Submit, error }) {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    Submit(password); // Pass the password to the Submit function
  };

  return (
    <form onSubmit={handleSubmit} className='w-[50%] h-fit  p-3 flex flex-col justify-center items-center gap-5'>
      <h1 className='text-lg font-thin'>Please enter your password to unlock</h1>
      <input 
        type="password" 
        className='outline-none bg-green-400 h-10 rounded-lg px-2' 
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Update the password state
      />

      <button className='bg-green-400 p-2 rounded-full text-xs text-stone-500 flex justify-center items-center gap-2' type='submit'>Unlock <FaUnlock /></button>

      {/* Add error message display if necessary */}
      {error && <p className="text-red-500">Incorrect password. Please try again.</p>}
    </form>
  )
}

export default LockUi
