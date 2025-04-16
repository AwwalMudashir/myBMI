import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate()

  return (
    <div className='w-full py-5 mb-[-20px] flex justify-between '>
      <img src="/logo.png" onClick={()=>navigate('/')} className='w-[150px] h-[120px] mt-[-27px] cursor-pointer'  alt="" />
      <ul className='flex justify-between '>
        <li title='Add User' onClick={()=>navigate('/add-user')}><i className="fa-solid fa-plus text-2xl cursor-pointer mx-4 mt-4" style={{ color: '#b21f7f' }}/></li> 
        <li title='View Users' onClick={()=>navigate('/view-users')}><i className="fa-solid fa-list text-2xl cursor-pointer mx-4 mt-4" style={{ color: '#b21f7f' }}/></li>
      </ul>
    </div>
  )
}

export default NavBar
