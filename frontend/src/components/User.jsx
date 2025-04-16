import React from 'react'
import { toast } from 'react-toastify'

const User = () => {

  async function onSubmitHandler(e){
    e.preventDefault()
    const form = document.querySelector('form')

    let dataObj = {
      fname:document.getElementById("first_name").value,
      lname:document.getElementById("last_name").value,
      age:document.getElementById("age").value,
      weight:parseFloat(document.getElementById("weight").value),
      height:parseFloat(document.getElementById("height").value),
    }

    try {
      const response = await fetch('http://localhost:8080/api/newuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataObj),
        mode:'cors'
      })
      if (response.ok) {
        toast.success('User added successfully')
        form.reset()
      } else {
        toast.error('Failed to add user')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }
  return (
<div className=" flex items-center justify-center mt-[-50px] p-6">
      <form onSubmit={onSubmitHandler} className="backdrop-blur-md bg-white/20 border border-white/30  rounded-xl p-8 w-full max-w-md">
        <h2 className="text-[#b21f7f] text-2xl font-bold mb-6 text-center">Add User</h2>

        <input
          type="text"
          placeholder="First Name"
          required
          id='first_name'
          className="w-full p-3 mb-4 rounded-md bg-white/40 text-gray-900 placeholder-gray-600 focus:outline-[#b21f7f]"
        />
        <input
          type="text"
          placeholder="Last Name"
          id='last_name'
          required
          className="w-full p-3 mb-4 rounded-md bg-white/40 text-gray-900 placeholder-gray-600 focus:outline-[#b21f7f]"
        />
        <input
          type="number"
          placeholder="Age"
          id='age'
          required
          className="w-full p-3 mb-4 rounded-md bg-white/40 text-gray-900 placeholder-gray-600 focus:outline-[#b21f7f]"
        />
        <input
          type="text"
          placeholder="Weight"
          id='weight'
          required
          className="w-full p-3 mb-4 rounded-md bg-white/40 text-gray-900 placeholder-gray-600 focus:outline-[#b21f7f]"
        />
        <input
          type="text"
          placeholder="Height"
          id='height'
          required
          className="w-full p-3 mb-4 rounded-md bg-white/40 text-gray-900 placeholder-gray-600 focus:outline-[#b21f7f]"
        />
 

        <button
          onClick={onSubmitHandler}
          type="submit"
          className="w-full bg-[#b21f7f] text-white py-2 rounded-md cursor-pointer hover:bg-[#b21f7f]/90 transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default User
