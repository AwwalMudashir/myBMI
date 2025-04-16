import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h1 className='text-5xl m-auto'>Do you know your BMI ?</h1>
      <p className='w-[80%] m-auto text-center'>BMI, or Body Mass Index, is a simple numerical value derived from a person's weight and height. It helps categorize individuals into weight groups such as underweight, normal, overweight, or obese. Calculated as weight (kg) divided by height (m²), BMI is widely used in health assessments. Though convenient, it doesn't account for muscle mass, age, or gender differences.</p>
      <img src="/ill2.0.png" className='w-[350px] m-auto' alt="" />
      <button className='bg-[#b21f7f] text-white w-[200px] h-[50px] rounded-full mt-10 flex justify-center items-center m-auto mb-[100px] cursor-pointer' onClick={()=>navigate('/add-user')}>
        Check My BMI
      </button>
    </div>
  )
}

export default Home