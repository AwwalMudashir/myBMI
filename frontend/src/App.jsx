import React from 'react'
import './App.css'
import NavBar from './NavBar'
import Display from './Display'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <>
      <ToastContainer/>
      <NavBar/>
      <Display/>
    </>
  )
}

export default App
