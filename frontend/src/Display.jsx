import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import View from './components/View'
import Update from './components/Update'

const Display = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-user' element={<User/>}/>
        <Route path='/view-users' element={<View/>}/>
        <Route path='/update-user' element={<Update/>}/>    
      </Routes>
    </div>
  )
}

export default Display
