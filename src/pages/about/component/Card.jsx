import React from 'react'
import img from '../../../assets/assets_sobir/img1 (3).png'
import img1 from '../../../assets/assets_sobir/img1 (4).png'
import img2 from '../../../assets/assets_sobir/img1 (5).png'
import img3 from '../../../assets/assets_sobir/img1 (1).png'

const Card = () => {
  return (
    <div className='border-2 border-[#1A1A1A] p-[10px] w-[95%] mx-auto rounded-2xl my-[30px]'>
        <div className='bg-[#1A1A1A] p-[30px]   my-[10px] rounded-2xl'>
            <p className='font-black text-3xl'>Key Features of Our Projects</p>
        </div>
        <div className='lg:flex grid lg:gap-0 gap-[20px] justify-between  '>
            <div className='bg-[#1A1A1A] lg:w-[23%] p-[10px] rounded-2xl '>
                <img src={img} alt="" />
                <p className=' text-2xl my-[20px]'>Strategic Planning</p>
                <p className='text-[#B3B3B2]'>Every project begins with thorough research and strategic planning to ensure a holistic understanding.</p>
            </div>
            <div className='bg-[#1A1A1A] lg:w-[23%] p-[10px] rounded-2xl '>
                <img src={img1} alt="" />
                <p className=' text-2xl my-[20px]'>Customized Solutions</p>
                <p className='text-[#B3B3B2]'>Every project begins with thorough research and strategic planning to ensure a holistic understanding.</p>
            </div>
            <div className='bg-[#1A1A1A] lg:w-[23%] p-[10px] rounded-2xl '>
                <img src={img2} alt="" />
                <p className=' text-2xl my-[20px]'>User-Centric Approach</p>
                <p className='text-[#B3B3B2]'>Every project begins with thorough research and strategic planning to ensure a holistic understanding.</p>
            </div>
            <div className='bg-[#1A1A1A] lg:w-[23%] p-[10px] rounded-2xl '>
                <img src={img3} alt="" />
                <p className=' text-2xl my-[20px]'>Timely Delivery</p>
                <p className='text-[#B3B3B2]'>Every project begins with thorough research and strategic planning to ensure a holistic understanding.</p>
            </div>
        </div>
    </div>
  )
}

export default Card