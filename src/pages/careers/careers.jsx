import React from 'react'
import "./career.css"
import start from "./images/Button (2).png"
import ins from "./images/Button (3).png"

const Careers = () => {
  return (
	 <div className='mt-[100px]'>
    <div className='flex justify-around items-center flex-wrap gap-[25px]'>
      <div className='bg-[#1A1A1A] flex items-start gap-[10px] p-[50px] lg:h-[400px] lg:w-[1000px] rounded-[15px] flex-wrap text-center lg:text-start'>
        <h1 className='text-[30px] lg:text-[60px] m-auto'><b>Unlock Your Potential in the Digital World</b></h1>
        <img src={start} alt="" className='m-auto'/>
      </div>

      <div className='bg-[#1A1A1A] p-[30px] lg:w-[400px] rounded-[15px]'>
        <h3 className='text-[22px]'><b>At NexGen</b></h3>
        <p className='my-[15px]'>We believe in fostering a dynamic and collaborative work environment that empowers our team members to excel in their respective fields. Join us to be part of a passionate and innovative team dedicated to crafting exceptional digital solutions for clients across the globe. We are committed to nurturing talent, encouraging professional growth, and creating a workplace where creativity thrives.</p>
        <div className='flex items-center gap-[15px]'>
          <img src={ins} alt="" />
          <p>Know More</p>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Careers