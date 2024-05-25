import React from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'

const Header = () => {
  return (
    <div className='h-16 px-2 bg-white flex justify-between items-center'>
      <div className='flex items-center gap-3'>
        <HiOutlineSearch fontSize={20} className='text-gray-400 absolute translate-x-1'/>
        <input type="text" placeholder="Search" className="border border-gray-300 rounded-md p-2 active:outline-none focus:outline-none h-10 w-[24rem] pl-5" />
      </div>
      <div className='flex flex-row'>
        <HiOutlineChatAlt fontSize={20} />
        <HiOutlineBell fontSize={20}/>
      </div>
    </div>
  )
}

export default Header